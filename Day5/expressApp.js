var express = require("express");
var consolidate = require("consolidate");
var app = express();
var port = 1234;
const fetch = require("node-fetch");

app.engine("ejs", consolidate.ejs);
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("x-powered-by", false);
app.enable("case sensitive routing");
app.enable("strict routing");
app.enable("view cache");

app.get("*", function(request, response){
                var promise = fetch("http://jsonplaceholder.typicode.com/users/");
                    promise.then(data => data.json())
                            .then(users => {                                
                                response.render("userlist", {users: users});                                
                            })
                            .catch((error) => {console.error(error)});                
            });

app.listen(port, function(){
    console.log("The server is running on the port %s", port);
});

