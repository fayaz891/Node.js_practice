const fs = require("fs");

//const data=fs.readFileSync("read.txt","utf-8");
//console.log(data);
//console.log("fayaz rashid");

//always print data file 1st and then "fayaz rashid" bc of synchronus

//now async

//fs.readFile("read.txt","utf-8",(err,data)=>{console.log(data);});
//console.log("fayaz rashid");

//in async 1st show "fayaz rashid" then show data file, bc it donot required that who requisted first,
//the data file take some time to read while outer console donot take time to read file,thats why it show
//"fayaz rashid", while in sync data file requiested 1st thats why show that one 1st
//we prefered always async 