//prime number

let n=7;


if (n<=0){
    console.log("PLEASE, ENTER POSITVE NUMBER");
}
else{
    for(let i=2; i<n; i++){
        if (n%i==0){
        console.log('not prime');
        break;
        }
        else{
            var result=console.log("prime number");
        }
    }
    console.log(result);
  
}




