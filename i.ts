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
    name : "KarthikkkOOOOO",
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
