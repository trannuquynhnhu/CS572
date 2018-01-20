var express = require("express");
var consolidate = require("consolidate");
//const fetchUser = require("./promise");
//const fetchUser = require("./observables");
const fetchUser = require("./async_await");

var app = express();
app.engine("ejs", consolidate.ejs);
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("x-powered-by", false);
app.enable("case sensitive routing");
app.enable("strict routing");
app.enable("view cache");
app.get("*", function(request, response){
                fetchUser(response);
            });

app.listen(1234, function(){
    console.log("The server is running on the port 1234");
});

