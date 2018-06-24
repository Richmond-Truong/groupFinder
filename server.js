var http = require("http");
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

//URL of mongodb. Set to my personal one ATM
const url = 'mongodb+srv://admin:admin@rt-cluster-fkxzi.mongodb.net/test?retryWrites=true';


//just a simple http server that you can ping
http.createServer(function (request, response) {
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Send the response body as "Hello World"
    response.end('Hello World test2\n');
 }).listen(8081);


/*********************************************
* Takes collection name and insert object
* Inserts insObj into collection
* callbacks true when inserted successful
* callbacks false when insertion fails
*********************************************/
function insert(colN, insObj, callback){
    MongoClient.connect(url, function(err, client) {
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
    MongoClient.connect(url, function(err, client) {
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