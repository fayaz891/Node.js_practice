
setTimeout(function () {
    console.log("3sec passed")
},3000);

var clear=setInterval(function () {
    console.log('setinterval used to repeat something');
}, 2000);
//stop setinterval
clearInterval(clear);

//normal function
function abc(ab) {
    console.log("hello fayaz")
}
abc();

//function expression
var exp=function(){
    console.log("function expression");
}
exp();

//callbackfunction,
//fun is a parameter and that parameter will b function,so we call callfunction with exp function,the result willbe exp function
function callFunction(fun){
    fun()
}
callFunction(exp);


//function with array
var x=function(arr){
    return "hello"+ arr.length + "everyone"
}
//x(["fayaz","waqas","farooq"]);
console.log(x(["fayaz", "waqas", "farooq"]));