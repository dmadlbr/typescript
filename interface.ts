//Interface

interface Student{
    name : string,
    age : number,
    course : string
}

const stu1 : Student = {
    name : "Dilbar",
    age : 22,
    course : "AI"
};

const stu2 : Student = {
    name : "KARTHIKOOOOO",
    age : 60,
    course : "AI"
};

console.log(stu1,stu2);
console.log(stu2.age);
console.log(stu1.name);
console.log(stu2.name);


interface User{
    name : (string | number);
}

const user1 : User = {
    name: 2244
};

const user2 : User = {
    name: "Dma"
};

//Optional keys

interface School {
    name : string,
    role : string,
    age? : number,
    subject? : string
}

const student : School = { name : "dheema" , role:"student", age:22};
const teacher : School = { name : "mary" , role:"teacher", age:40 , subject: "Maths"};
console.log(student,teacher);

//
interface Company {
    name : string,
    place : string,
}

interface Employee extends Company {
    cId? : number,
    role : string
} 

interface Manager extends Employee {
    salary : number
}

const cmp : Company = {
    name : "ABC",
    place : "Kerala"
};

const emp1 : Employee = {
    name : "John",
    place : "Blr",
    role : "Employee"
};

const mgr : Manager = {
    name : "Jacob",
    place : "Blr",
    cId : 412,
    role : "Manager",
    salary : 120000
};

console.log(cmp,mgr.place);

//Type Alias

type userType = "admin" | "user" ;
const u1 : userType = "admin";

type A = {
    name : string,
    role : userType;
}

const stuDetails : A = {
    name:"Paul",
    role : u1
}

// combining interfaces to type
interface interA {
    job:string;
}

interface interB extends interA{
    place : string;
}

type B = interA & interB &{
    state : string;
}

const job : B = {
    job : "developer",
    state : "kerala",
    place : "calicut"
}

console.log(job);

// combining types
type C  = A & B;
const detail : C = {
    name : "beena",
    role : "user",
    job : "analyst",
    state : "kerala",
    place : "tvm"

}
console.log(detail);

//combining types to interface

interface interC extends A {
    name:string,
    role : userType
}

 const cDetails : interC = {
    name:"chris",
    role : "admin"
 }
 console.log(cDetails.name);

