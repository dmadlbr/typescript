"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoList = "https://jsonplaceholder.typicode.com/todos";
const singleTodoWithId_2 = "https://jsonplaceholder.typicode.com/todos/2";
const getTodoList = async () => {
    try {
        const res = await fetch(todoList);
        const response = await res.json();
        return response;
    }
    catch (err) {
        console.log(err);
    }
};
//IIFE - Immediately Invoked Function Expression
// const test = (a:any,b:any):any =>{
//     return a + b;
// }
// test(2,3);
((a, b) => {
    return a + b;
})(2, 5);
(async () => {
    const response = await getTodoList();
    response?.forEach((item) => {
        console.log(item.title);
    });
})();
//# sourceMappingURL=api_calling.js.map