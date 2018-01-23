var express = require("express");
var crypto = require('crypto');  
var app = express();  
var MongoClient = require("mongodb").MongoClient;

app.get("*", function(request, response){
    MongoClient.connect("mongodb://localhost:27017/lab7", function(error, client){
            const db = client.db('lab7');
            if(error) throw error;
            db.collection("homework7").findOne({}, function(err, doc){
                if(err) throw err;
                console.dir(doc.message);
                var decipher = crypto.createDecipher('aes-256-cbc','asaadsaad')
                var dec = decipher.update(doc.message,'hex','utf8')
                dec += decipher.final('utf8');
                response.send(dec);
                client.close();
            });
            console.dir("Finish!");
    });
});

app.listen(1234, function(){
    console.log("The server is listening at the port 1234");
});


