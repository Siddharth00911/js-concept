// //event loop eg.1
// console.log('start');

// setTimeout( function cb(){
//     console.log("callback");
// }, 5000);

// console.log('end');

//////////////////////////////////////////////////////////////
// //event loop eg.2

// window.onload=function(){

// console.log('Start');
// document.getElementById('btn').addEventListener('click', function cb(){
//             console.log('Callback');
//         });
// console.log('End');

// }


//////////////////////////////////////////////////////////////
// //event loop eg.3

// console.log("Start");

// setTimeout(function cbT(){console.log("cb setTimeout");}, 5000);

// fetch('https://api.netflix.com').then(function cbF(){ 
//     console.log('cb Netflix');
// });

// console.log("End");

///////////////////////////
setTimeout(function(){
    console.log('TIMER END');}, 0);                                 //it will execute after callsatck completely empty