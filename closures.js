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
function x(){

    
        for(var i=1; i<=5; i++){

            function closure_fun(n){
            setTimeout(function (){console.log(n);},  n * 1000  )    //setTimeout it is callback fucntion
            }        
            
            closure_fun(i)
            }    
               
    
    console.log('**********(hi-5)  Timer********');
}

x();


