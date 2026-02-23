let x = 2;
const y= 5;
var z=7;
{
    x = 3;
    z=11;
    console.log(z);
console.log(x);
    {
        let a=55;
        console.log(a);
        z=22;
        console.log(z);
    }
    //console.log(a);
    console.log(z);
}

//console.log(a);

{
    x= 6;
    z=8;
    console.log(x);
    console.log(z);
}
console.log(y);
console.log(x);
// let z ;
console.log(z);