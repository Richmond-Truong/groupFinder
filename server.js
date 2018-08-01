const MongoClient = require('mongodb').MongoClient;
var express = require('express');
var cors = require('cors');
var app = express(); 
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors());
//Url of mongodb. Set to my personal one ATM
const mUrl = 'mongodb+srv://admin:admin@rt-cluster-fkxzi.mongodb.net/test?retryWrites=true';
const userT = "users"

const postT = "posts"
app.get('/home', function (req, res) {
    console.log("Got a GET request for the homepage");
    res.send('Hello GET1');
 })

 /*********************************************
* get user infor of userId
*********************************************/
app.get('/user/:userId', function (req, res) {
    console.log(`req.param.userId = ${req.params.userId}`);
    getData(userT,{username: req.params.userId}, result =>{
        if(Object.keys(result).length === 0){
            res.status(404);
            res.send("user not found");
        }
        else if(result !== false){
            res.status(200);
            res.send(JSON.stringify(result));
        }else{
            res.status(500);
            res.send("server error");
        }
    })
});

 /*********************************************
* get posts
*********************************************/
app.get('/post', function (req, res) {
    console.log(`req.param.userId = ${req.params.userId}`);
    getPosts(result =>{
        console.log(result);
        res.status(200);
        res.send(result);
    })
});

 /*********************************************
* Login
*********************************************/
app.post('/login', function(req,res){
    var username = req.params.userId;
    var password = req.param.password;
    getData(userT,{username: username}, result =>{
        if(result.password === password){
            res.status(200);
            res.send("Login successful");
        }else{
            res.status(401);
            res.send("Auth error");
        }
    });
});

/*********************************************
* post to post will add post into database
*********************************************/
app.post('/post', function(req, res){
    var title = req.body.title;
    var description = req.body.description;
    var tags = req.body.tags;
    var roles = req.body.roles;
    var compensation = req.body.compensation;
    var date = Date.now();
    var user = req.body.user;
    console.log(`title = ${title} description = ${description}`);
    if(title === undefined || description === undefined || tags === undefined || roles === undefined || compensation === undefined){
        res.status(400);
        res.send("Missing param need : title, description, tags, roles, compensation");
    }else{
        insert(postT, {"title" : title,"description" : description,"tags" : tags, "roles" : roles, "compensation" : compensation, "date" : date}, result =>{
            if(result){
                
                updateUser({"username": user}, )
                res.status(200);
                res.send("Inserted post into database");
            }else{
                res.status(500);
                res.send("Insert couldn't happen");
            }
        });
    }
});


/*********************************************
* post to user will add user into database
*********************************************/
app.post('/addUser', function(req, res){
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
    var posts = [];
    var comments = [];
    var skills =  [];
    console.log(`username = ${username} password = ${password} email = ${email} skills = $skills}`);
    if(username === undefined || password === undefined || email === undefined ){
        res.status(400);
        res.send("Missing param need : username, password, email, skills");
    }else{
        insert(userT, {"username" : username, "password" : password, "email" : email, "posts" : posts, "comments" : comments, "skills" : skills}, result =>{
            if(result === true){
                res.status(200);
                res.send("Inserted user into database");
            }else{
                res.status(500);
                res.send("Insert couldn't happen");
            }
        });
    }
});

var server = app.listen(process.env.PORT || 8081, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log(`server is listening on ${host} , ${port}`);
});

function updateUser(colN, row, update, callback){
    MongoClient.connect(mUrl, function(err, client) {
        if(err){ 
            callback(false);
            throw err;
        } 
        const db = client.db("groupFinder");
        const collection = db.collection(colN);
        collection.updateOne(row, update, function(err, res){
            if(err){ 
                callback(false);
                throw err;
            }
            console.log(`updated user`);
        });
        client.close();
        callback(true);
    });
}

/*********************************************
* Takes collection name and insert object
* Inserts insObj into collection
* callbacks true when inserted successful
* callbacks false when insertion fails
*********************************************/
function insert(colN, insObj, callback){
    MongoClient.connect(mUrl, function(err, client) {
        if(err){ 
            callback(false);
            throw err;
        } 
        const db = client.db("groupFinder");
        const collection = db.collection(colN);
        collection.insertOne(insObj, function(err, res){
            if(err){ 
                callback(false);
                throw err;
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

/*********************************************
* returns posts from newest to oldest
*********************************************/
function getPosts(callback){
    MongoClient.connect(mUrl, function(err, client) {
        if(err){ 
            throw err;
            callback(false);
        } 
        const db = client.db("groupFinder");
        const collection = db.collection(postT);
        var sortParm = {date: -1}
        collection.find().sort(sortParm).toArray(function (err, result){
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