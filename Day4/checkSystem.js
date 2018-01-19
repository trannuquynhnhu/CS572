const os = require("os");

function checkSystem(observer){
    const memorySize = os.totalmem();
    const cores = os.cpus();
    return{
        memorySize: memorySize,
        cores: cores
    };
    
}

const observer = {
    next: function(infos){
        console.log("Checking the system...");
        if(infos.memorySize < 4294967296)
        {
            console.log("This app needs at least 4 GB of RAM");
        }
        if(infos.cores < 2){
            console.log("Processor is not supported");
        }
    },

    error: function(e){
        console.log("Error checking...");
    },

    complete: function(){
        console.log("System is checked successfully.");
    }
};

checkSystem(observer);
