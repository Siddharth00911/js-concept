// //HOF

// function x(){
//     console.log('Namste');
// }

// function y(x){
//     x();
// }

// y(x);

// // IN THIS CODE:
// // y() -> HOF (higer order function)
// // x() -> callback function

//////////////////////////////////////////////////////////////////////

// calculate area, cicumference and diameter of circle 
// with FUNCTIONAL PROGRAMMING


let radius= [3, 1, 2, 4];

function areaC(radius){
    return Math.PI* radius* radius;
}
function cicumferenceC(radius){
    return 2* Math.PI* radius;
}
function diameterC(radius){
    return 2*radius;
}

function calculate(radius, LOGIC_1){
    let output= [];
    for(let i=0; i<radius.length; i++){
        output.push(LOGIC_1(radius[i]));
    }
    return output;
}

console.log(calculate(radius, areaC));
console.log(calculate(radius, cicumferenceC));
console.log(calculate(radius, diameterC));

////////////

// let radius= [3, 1, 2, 4];

// let areaC = function (radius){
//     return Math.PI* radius* radius;
// }
// let cicumferenceC = function (radius){
//     return 2* Math.PI* radius;
// }
// let diameterC = function (radius){
//     return 2*radius;
// }

// let calculate = function (radius, LOGIC1){
//     let output= [];
//     for(let i=0; i<radius.length; i++){
//         output.push(LOGIC1(radius[i]));
//     }
//     return output;
// }

// console.log(calculate(radius, areaC));
// console.log(calculate(radius, cicumferenceC));
// console.log(calculate(radius, diameterC));