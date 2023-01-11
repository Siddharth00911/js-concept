// Callback functions
// sync JS -----> Async JS code by callback func

setTimeout(function (){console.log("Timer-5")}, 5000);
function x(y){
    console.log('X called');
    y();
}

x(function y(){ console.log('Y called');});




//JS-> synchronous & single-threaded language

//Blocking the main thread

//Power of callback?



