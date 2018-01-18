const http = require('http');
const server = http.createServer();
const fs = require('fs');

server.on('request', (req, res) => {
        fs.readFile('./Day3/lion.jpg', (err, data) => {
                if(err) throw err;
                res.writeHead(200, {'Content-Type': 'image/jpeg'});
                res.end(data);
        });
});

server.listen(8000);


