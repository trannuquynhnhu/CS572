//import { MongoClient } from "./C:/Users/Quynh Nhu/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/mongodb";
//"use strict";

var express = require("express");
const mongoClient = require("mongodb").MongoClient;
const app = express();


app.use(express.json());
app.post("/addLocation", function(request, response){
    
    mongoClient.connect("mongodb://localhost:27017", function(error, client){
        if(error) throw error;
        var db = client.db("homework8");        
        var doc = {
            name:       request.body.name,
            category:    request.body.category,
            point: request.body.point            
        }
        db.collection("location").createIndex({position: "2d"});
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
            point: request.body.point            
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

app.get("/location/search/:category/:name?", function(request, response){
    const currentLocation = [-91.967291, 41.017945];
    mongoClient.connect("mongodb://localhost:27017", function(error, client){
        if(error) throw error;
        var db = client.db("homework8");
        const query = {$and: [{"category": request.params.category}, {"point":{$near: currentLocation}}]};
        if(request.params.name) query["$and"].push({"name": request.params.name});
        db.collection("location").find(query).limit(3, function(error, result){
            if(error) throw error;
            response.send(result);
        });
        client.close();
    });
})

app.listen(1234, function(){
    console.log("The server is listening on the port 1234");
})
