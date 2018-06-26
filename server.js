const MongoClient = require('mongodb').MongoClient;
var express = require('express');
var app = express(); 
//Url of mongodb. Set to my personal one ATM
const mUrl = 'mongodb+srv://admin:admin@rt-cluster-fkxzi.mongodb.net/test?retryWrites=true';

app.get('/home', function (req, res) {
    console.log("Got a GET request for the homepage");
    res.send('Hello GET1');
 })
 
app.get('/user/:userId', function (req, res) {
    console.log(`req.param.userId = ${req.params.userId}`);
    getData("users",{username: req.params.userId}, result =>{
        res.send(JSON.stringify(result));
    })
    
})

var server = app.listen(8081, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log(`server is listening on ${host} , ${port}`);
});

/*********************************************
* Takes collection name and insert object
* Inserts insObj into collection
* callbacks true when inserted successful
* callbacks false when insertion fails
*********************************************/
function insert(colN, insObj, callback){
    MongoClient.connect(mUrl, function(err, client) {
        if(err){ 
            throw err;
            callback(false);
        } 
        const db = client.db("groupFinder");
        const collection = db.collection(colN);
        collection.insertOne(insObj,function(err, res){
            if(err){ 
                throw err;
                callback(false);
            } 
            console.log(`inserted ${JSON.stringify(insObj)} into user tables`);
        })
        client.close();
        callback(true);
     }); 
}

/*********************************************
* Takes query and colleciton name as input
* does the query on the collection
* callbacks result of when successful
* callbacks false when query fails
*********************************************/
function getData(colN, query, callback){
    MongoClient.connect(mUrl, function(err, client) {
        if(err){ 
            throw err;
            callback(false);
        } 
        const db = client.db("groupFinder");
        const collection = db.collection(colN);
        console.log(`query = ${JSON.stringify(query)}`);
        collection.find(query).toArray(function (err, result){
            if(err){ 
                throw err;
                callback(false);
            } 
            console.log(`query returned = ${JSON.stringify(result)}`);
            client.close();
            callback(result);
        });
     
    });
}