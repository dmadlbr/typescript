                        //overloading


// function add(a:number|string, b:number|string):number|string{
//     return a + b;                        -> NOT POSSIBLE FOR + OPERATION
// }                                      

// function add(a:any,b:any){
//     return a - b;                        -> SAME AS THAT OF JS [NO ROLE FOR TS]
// }

function add(a:number,b:number):number;     
function add(a:string,b:string):string;
function add(a:any,b:any):any{
    return a + b;
}
console.log(add(4,5));
console.log(add("hello"," dma"));
// console.log(add(true,false));            -> ONLY NUMBER OR STRING POSSIBLE 

                        //generics

type Role = "user" | "guest" | "admin";

type GuestType = {
    name : string,
    place : string,
    role : Role
}

const guest : GuestType = {
    name : "Elephant",
    place : "Amazon",
    role : "guest"
}

type UserType = {
    name : string,
    place? : string,
    role : Role,
    country : string
}

const user : UserType = {
    name : "Michelle",
    role : "user",
    country : "Germany"
}

function getDetails<T>(details:T):T{
    return details;
};

const user1 = getDetails(user);
const guest1 = getDetails(guest);
user1.country;
guest1.name;

console.log(user1,guest1);
