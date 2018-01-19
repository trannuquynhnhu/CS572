
const fs = require("fs");

const processFile = (fileName) => {
    console.log("reading the file " + fileName);    
    const data = fs.readFileSync(fileName, "utf8");      
    return data;
};

process.on("message", (fileName) => {
    const data = processFile(fileName);
    process.send(data);
})

//process.on("data", () => {});

//process.on("end", () => {});

