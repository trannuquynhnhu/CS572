"use strict";

var express = require("express");
var morgan = require("morgan");
var app = express();
var model = [{id: 1, name: "Nhu", course: "CS572", grade: "A"}, {id: 2, name: "An", course: "CS572", grade: "A+"}];

app.use(morgan("combined"));

app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
   });

app.get("/get", function(request, response){
    response.send(JSON.stringify(model));
});

app.get("/get/:id", function
(request, response){
    let id = request.params.id;    
    for(let i = 0; i < model.length; i++)
    {       
        if (model[i].id == id){
            response.send(JSON.stringify(model[i]));
            break;
        }
    }        
});

app.use(express.json());
app.post("/add", function(request, response){  
    var errors = [];
    if(!request.body.id) errors.push("Id should not be empty");
    if(!request.body.name) errors.push("Name should not be empty");
    if(!request.body.course) errors.push("Course should not be empty");
    if(!request.body.grade) errors.push("Grade should not be empty");

    if(errors.length > 0){
        response.send("There is error(s): " + JSON.stringify(errors));        
    }else{
        var newGrade = {id: request.body.id, name: request.body.name, course: request.body.course, grade: request.body.grade};   
        model.push(newGrade);
        response.send(JSON.stringify(model));
    }
    
});

app.put("/add/:id", function(request, response){
    var id = request.params.id;
    for(let i = 0; i < model.length; i++){
        if(model[i].id == id){
            if(request.body.name) model[i].name = request.body.name;
            if(request.body.course) model[i].course = request.body.course;
            if(request.body.grade) model[i].grade = request.body.grade;
        }
    }
    response.send(JSON.stringify(model));
});

app.delete("/delete/:id", function(request, response){
    var id = request.params.id;
    for(let i = 0; i < model.length; i++){
        if(model[i].id == id){
            model.splice(i, 1);
        }
    }    
    response.send(JSON.stringify(model));
});

app.listen(1234, function(){
    console.log("The server is listening at the port 1234");
});