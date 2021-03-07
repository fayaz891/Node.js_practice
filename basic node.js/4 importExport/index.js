
//in node.js every individual js files called modules,each modules have 100s of varaibles and functions
//but these all are privates and cannot access in other modules/files
//if we want to access each variable or function in other modules/files and make them public then
//we use " module.exports = functionName/variableName "


const {add, name, multi} = require("./oper");


//console.log(oper);  //it return  objects having properties of data withn oper.js file

console.log(add(5,5));

console.log(name);

console.log(multi(5,6));

