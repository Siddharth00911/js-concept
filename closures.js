// closures -> functions together in  it's lex evn

// function country(){
//     let name="india";

//     function getCountry(){
//         console.log(`You are in => ${name}.`);
//     }
//     getCountry();
// }

// country();

//////////////////////////////////
// // example 2

// function z(){
//     var b=900;
//     function y(){
//         var a=7;
//         function x(){
//             console.log(a,b);
//         }
//         x();
//     }
//     y();
// }                 

// z();
/////////////////////////////////////////////////////////////////////

//closer with setTimeout function

// function x(){

//     for(let i=1; i<=5; i++){
//     setTimeout(function (){console.log(i);},  i * 3000  )                             //setTimeout it is callback fucntion
//     }                
    
//     console.log('**********(hi-5)  Timer********');
// }

// x();
//////////////////////////////////without using "let"
// function x(){

    
//         for(var i=1; i<=5; i++){

//             function closure_fun(n){
//             setTimeout(function (){console.log(n);},  n * 1000  )    //setTimeout it is callback fucntion
//             }        
            
//             closure_fun(i)
//             }    
               
    
//     console.log('**********(hi-5)  Timer********');
// }

// x();
///////////////////////////////////////////////////////////////

//closure interview

// // 1.
// function outer(){

//     let a=5;
//     return function inner(){
//         console.log(a);
//     }
// }

// outer()();

// let o1= outer();
// o1();


// // 2.
// function outer(x){
//     let a=5;
//     return function inner(){
//         console.log(a, x);
//     }


// }

// outer("hi-5")();


// // // 3.
// function outerest(){
//     let b=10;
//     function outer(){ 
//         let a=5;
//         return function inner(){
//             console.log(a, b, c);
//         }
//     }
//     return outer;
// }

// let c=15;

// let o1=outerest()();
// o1();

// // // 4.
// function outerest(){
//     function outer(b){ 
//         let a=5;
//         return function inner(){
//             console.log(a, b, c);
//         }
//     }
//     return outer;
// }

// let c=15;

// let o1=outerest()('hi-5');
// o1();

//////////////////////////////

// advantages ->
// 1. module Pattern
// 2. currying
// 3. in some higher order functions like memoize, once
// 4. it help in data hiding and encapsulations


// data hinding/encapsulations-> hiding some-functions/variables in programs
// eg.1

function Counter(){
    let count=1;
    this.ICounter = function(){
        count++;
        console.log(count);
    }
    this.DCounter = function(){
        count--;
        console.log(count);
    }
}

let counter1 = new Counter();

counter1.ICounter();
counter1.ICounter();
counter1.DCounter();
