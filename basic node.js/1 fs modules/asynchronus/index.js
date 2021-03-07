const fs= require("fs");


//create file asynchronus way,(err) show is there is any error,if not the file will created and console show its input data
fs.writeFile("read.txt","today is awesome day",(err)=>{
   console.log("file is created");});


    //we pass a function as an arguments, call back, that gets called when that task completes.
    //the callback has an arguments that tells you whether the operation completed successfully.
    //now we need to say what to say what to do when fs.writeFile has completed(even if its nothing),
    //and start checking for errors.


//append data into file    
//fs.appendFile("read.txt","im fayaz rashid",(err)=>{console.log("task completetd");});    

//read file as asynchrounus,it required 2 arguments ,(err) will always required
//fs.readFile("read.txt","utf-8",(err,data)=>{console.log(data);});
