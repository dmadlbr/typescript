var user = "Dheema";
var user = '20';
console.log(user);

let place:string = "kerala";

let date:(number | string) = "monday";
date = 22;
console.log(date);

//Array
let arr = [1,"h"];
let arr2:(number)[] = [1,2,3,4,5];
console.log(arr2);

//Object
let obj:{ uname:string, age} = {uname : "dheema",age: 20};
console.log(obj);
console.log(obj.uname);

//Function
function greet(name:string):void{
    console.log("Good Morning " + name);
}
greet('Paul');


function sum(a:number,b:number):number{
    return a + b;
}
console.log(sum(1,5));
const res = sum(1,4);
console.log(res);

function diff(a:number,b:number):string{
    return (a-b).toString();
}
console.log(diff(10,5)); 

const mul = (a:number,b:number) =>{
    return a * b;
}
console.log(mul(4,5));