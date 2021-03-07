const path=require("path");

//tofind path of directories/folder
//right click on above file name and copy path of file name and paste in dirname(...) and "\" changed into "/"
console.log(path.dirname("F:/js/Path Modules/index.js"));

//tofind extension of file i.e .js,.html,.txt etc
console.log(path.extname("F:/js/Path Modules/index.js"));

//tofind name of file
console.log(path.basename("F:/js/Path Modules/index.js"));

//the path.parse() method return object whose properties represent significant elements of the path
console.log(path.parse("F:/js/Path Modules/index.js"));


//how to call one thing from in objects, like name or base or ext or dir or root etc

const myPath = path.parse("F:/js/Path Modules/index.js");
console.log(myPath.name);