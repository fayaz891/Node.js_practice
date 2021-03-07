
//JSON (javascript object notation) is lightWeight formate for storing and transporting data.
//it is used when data is sent from a server to  a web page

const bioData={
    name:"fayaz",
    rollNo:36,
    address:"pakistan"
};
//console.log(bioData.name,bioData.address);

//convert object into json data
const json=JSON.stringify(bioData);
//console.log(json);

//conver json into object data
const object=JSON.parse(json);
//console.log(object);



/*
1 object convert into json
2 add to the other file
3 read file
4 again convert into object
5 print in consol log
*/

const bioData1 = {
    name: "rashid",
    rollNo: 36,
    address: "pakistan"
};
const ab=JSON.stringify(bioData1);

const fs=require("fs");
//create file
fs.writeFile("json1.json", ab, (err) => { console.log("done") });
//read file
fs.readFile("json1.json","utf-8",(err,data)=>{
    //const data1=JSON.parse(ab);
    console.log(data);
});