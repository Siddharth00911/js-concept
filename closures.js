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
// example 2

function z(){
    var b=900;
    function y(){
        var a=7;
        function x(){
            console.log(a,b);
        }
        x();
    }
    y();
}

z();


