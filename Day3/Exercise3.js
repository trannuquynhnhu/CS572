'use strict';
const EventEmitter = require('events');

class Clock extends EventEmitter{
    
    constructor(){
        super();  
        setInterval(() => {
            console.log('tick...'); 
            this.emit('tick');
        }, 1000);                       
    }      
       
}

var aClock = new Clock();
aClock.on('tick', function(){
    console.log("woohoo");
})

