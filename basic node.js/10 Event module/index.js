//Events Module

// Event module is also build-in module in node.js. where you can creat,fire and listen for your own module

//example 1: registering for the event to fire one time using once

//example 2: create an event emitter instance and register a couple of csllback 

//example 3: registering for the event with callback parameters




const events=require("events");
//making an object
const EventEmitter = new events.EventEmitter();


/*
//defining/listning an event, always before creating event
eventEmitter.on("myName",()=>{
    console.log("im fayaz rashid");
});

//for example no 2, we can call multiple functions on single event
EventEmitter.on("myName", () => {
    console.log("im learning node.js");
});
EventEmitter.on("myName", () => {
    console.log("i will complete it in 1 month in sha Allah");
});

//registerng/creating an event
EventEmitter.emit("myName");
*/


//its like function define
//checkPage event name and the function is msg print
EventEmitter.on("checkPage",(StCd,msg)=>{
console.log(`status code is ${StCd} the page is ${msg}`);
});


//for examle no.3 register event with callback parameters
//its like function call
EventEmitter.emit("checkPage",200,"ok")


