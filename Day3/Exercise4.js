const fs = require('fs');
const zlib = require('zlib');
const unzipFile = __dirname + '/source.txt';
const zipFile = __dirname + '/source.txt.gz';
const gzip = zlib.createGzip();
const gunzip = zlib.createGunzip();
const unzip = zlib.createUnzip();  

//Zip the file "source.text" into "destination.txt.gz"
function compress(filename){  
    var readStream = fs.createReadStream(filename);
    var newFileName = filename + ".gz";  
    var writeStream = fs.createWriteStream(newFileName);
    readStream.pipe(gzip).pipe(writeStream);
}

//Unzip the file "destination.txt.gz" into "unzip.txt"
function decompress(filename){  
    var readStream = fs.createReadStream(filename);
    var newFileName = __dirname + '/destination.txt';       
    var writeStream = fs.createWriteStream(newFileName); 
    readStream.pipe(gunzip).pipe(writeStream);
}

compress(unzipFile);
decompress(zipFile);





