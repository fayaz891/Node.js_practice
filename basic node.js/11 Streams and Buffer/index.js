
//sreams are object that you read data from source in continue fashion,
//streaming means listning to music or watching vedio in real time ,instead of downloading whole fileto computer and watch later

//it has 4 types
//1) Readable : for read operation, mostly used 
//2) Writable : for write operation, mostly used
//3) Duplex : for both read and write
//4) Transform : type of duplex which give output on the basis of input


//each type of stream is an eventemiter instance and throws several events and different instance of time.
//some comonly event which is used mostly
//1) data : this event is fired when data is available to read.
//2) end : this is fired when there is no more data is available to read

//3) eror : this event is fired when there is any error recieving or watching data
//4) finish : this event is fired when all the data has been flushed to your system


const fs = require("fs");
const http= require("http");

const server = http.createServer();


server.on("request",(req,res)=>{
res.writeHead(200,{"content-type":"txt/html"});
const rstream = fs.createReadStream("index.txt", "utf-8");   //const wstream = fs.createWriteStream(__dirname + "/index.txt");

//shorter method
rstream.pipe(res);

/*longer method
rstream.on("data",(chunkdata)=>{
      res.write(chunkdata);
})
rstream.on("end",()=>{
    res.end();
})
rstream.on("error",(err)=>{
    console.log(err);
    res.end("does not exist");
})
*/

});

server.listen(7000,console.log("done"));
