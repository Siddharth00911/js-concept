// 1. Function statement or Function Declaration

// function a(){
//     console.log('a called');
// }

// // 2. Function Expression 

// let b = function (){
//     console.log('b');
// }

// 3. Named Function Expression

// let b = function xyz(){
//     console.log('NAMED Func-Expression');
// }
// ****NFE special case

//  let b= function xyz(){
//     console.log('NFE-case');
//  }

//  b();
//  xyz();

// 4. Anonymous Functions-> function without name
// -> A.F. are used when,  function used as values (for another functions)

// function (){

// }

// // 5. Parameter and Argument

// function ABC(param1, param2){           //parameter
//     console.log(param1 + param2); 
// }

// ABC(1,2);                                //Arguments


// 6. FIRST CLASS FUNCTIONS-> ability of func to be used like values
// FIRST CLASS CITIZENS

function name1(){
    return "Siddharth";
}

function greet(name1){
    console.log("Hello, "  + name1);
}

greet(name1);

  

