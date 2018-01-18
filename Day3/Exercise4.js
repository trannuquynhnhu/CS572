const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();
const gunzip = zlib.createGunzip();

//Zip the file "source.text" into "source.txt.gz"
function compress(){  
    const unzipFile = __dirname + '/source.txt';
    const readStream = fs.createReadStream(unzipFile);
    const newFileName = unzipFile + ".gz";  
    const writeStream = fs.createWriteStream(newFileName);
    readStream.pipe(gzip).pipe(writeStream);
}

//Unzip the file "source2.txt.gz" into "destination.txt"
function decompress(){ 
    const zipFile = __dirname + '/source2.txt.gz'; 
    const readStream = fs.createReadStream(zipFile);
    const newFileName = __dirname + '/destination.txt';       
    const writeStream = fs.createWriteStream(newFileName); 
    readStream.pipe(gunzip).pipe(writeStream);
}


compress();
decompress();





