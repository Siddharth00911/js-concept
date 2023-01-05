// // block scope of variable 

// {
//     var a=10;
//     let b=20;
//     const c=30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// console.log(a);
// console.log(b);
// console.log(c);
///////////////////////////////////////////////////////////////

// // shadowing

// let b=100;
// {
//     let b=10;
//     console.log(b);
// }
// console.log(b);
/////////////////////////////////////

// // illegal shadowing

// let b=200;
// {
//     var b=1000;
//     console.log(b);
// }
// console.log(b);