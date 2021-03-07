//create folder
//create file in it named bio.txt and add data
//add more data with existing data
//read data in file encoding not in buffer form
//rename file mybio.txt
//delete file and folder

const fs=require("fs");

//create folder
//fs.mkdir("fayaz",(err)=>{console.log("folder created");});

//create file
//fs.writeFile("./fayaz/bio.txt","im fayaz rashid",(err)=>{console.log("file created");});

//add more data
//fs.appendFile("./fayaz/bio.txt","what are you doing",(err)=>{console.log("file ubdated");});

//read data
//fs.readFile("./fayaz/mybio.txt","utf-8",(err,data)=>{console.log(err);}); //consol pe err print hoga,data b print 
//krskty hy..

//rename file
//fs.rename("./fayaz/bio.txt","./fayaz/mybio.txt",(err)=>{console.log("name changed");});

//delete file
//fs.unlink("./fayaz/bio.txt",(err)=>{console.log("file deleted");});

//remove folder
//fs.rmdir("./folderName",(err)=>{console.log(err);});
