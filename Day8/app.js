//import { MongoClient } from "./C:/Users/Quynh Nhu/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/mongodb";
//"use strict";

var express = require("express");
var mongoClient = require("mongodb").MongoClient;
var app = express();

app.use(express.json());
app.post("/addLocation", function(request, response){
    
    mongoClient.connect("mongodb://localhost:27017", function(error, client){
        if(error) throw error;
        var db = client.db("homework8");        
        var doc = {
            name:       request.body.name,
            category:    request.body.category,
            longtitude: request.body.longtitude,
            latitude: request.body.latitude
        }
        db.collection("location").insertOne(doc, function(){
            console.log("Finish inserting a new location");
            response.send(doc);
        });
        client.close();
    }); 

});

app.get("/location/:name", function(request, response){
    mongoClient.connect("mongodb://localhost:27017", function(error, client){
        if(error) throw error;
        var db = client.db("homework8");
        db.collection("location").findOne({name: request.params.name}, function(err, doc){
            console.log("Finish getting a location");
            response.send(doc);
        });
        client.close();
    });
});

app.use(express.json());
app.put("/updateLocation/:name", function(request, response){
    console.log(request.body.name);
    mongoClient.connect("mongodb://localhost:27017", function(error, client){
        if(error) throw error;
        var db = client.db("homework8");
        var toUpdateObject = {            
            category: request.body.category,
            longtitude: request.body.longtitude,
            latitude: request.body.latitude
        }
        db.collection("location").update({name: request.params.name}, toUpdateObject, function(err, numUpdated){
            console.log("Finish updating location " + numUpdated);
            response.send(numUpdated);
        });
        client.close();
    });
});

app.delete("/deleteLocation/:name", function(request, response){
    mongoClient.connect("mongodb://localhost:27017", function(error, client){
        if(error) throw error;
        var db = client.db("homework8");        
        db.collection("location").deleteOne({name: request.params.name}, function(err, result){
            console.log("Finish deleting location " + result);
            response.send(result);
        });
        client.close();
    });
});

app.listen(1234, function(){
    console.log("The server is listening on the port 1234");
})
