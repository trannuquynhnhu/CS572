const Rx = require("@reactivex/rxjs");
const subject = new Rx.Subject();
const {fork} = require("child_process");
const fs = require("fs");

function readFile(e){
    var filePath = getFilePath(e.req.url);    
    const childProcess = fork(__dirname + "/processFile.js");
    childProcess.send(filePath);
    childProcess.on("message", result =>{
        var fileName = "newFile_day4.txt";
        e.res.end(`Getting the returned data into the file ${fileName}`);
        var writeStream = fs.createWriteStream(fileName);
        writeStream.write(result);    
        writeStream.end();    
    })
}
function getFilePath(url){
    const startIndex = url.indexOf("url=") + 4;
    return url.substring(startIndex);
}

subject.subscribe(readFile);

const http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
    subject.next({req: req, res: res});
});

//server.on("data", () => {});
//server.on("end", () => {});

server.listen(1234, () => console.log("1234"));

