const todoList = "https://jsonplaceholder.typicode.com/todos";
const singleTodoWithId_2 = "https://jsonplaceholder.typicode.com/todos/2";


type Todo = {
    userId : number,
    id : number,
    title : string,
    completed : boolean
}
const getTodoList = async (): Promise<Todo[] | undefined | null> => {
    try{
        const res = await fetch(todoList);
        const response = await res.json();
        return response;

    }catch(err){
        console.log(err);
    }
}

//IIFE - Immediately Invoked Function Expression

// const test = (a:any,b:any):any =>{
//     return a + b;
// }
// test(2,3);

((a:any,b:any):any => {
    return a + b;
})(2,5);

(async () =>{
    const response = await getTodoList();
    response?.forEach((item)=>{
        console.log(item.title);
    })
})();


            // singleTodo
const getSingleTodo = async ():Promise<Todo | undefined |null> => {
   try{
    const res = await fetch(singleTodoWithId_2);
    const response = await res.json();
    return response;
   }catch(err){
    console.log(err);
   }
}
getSingleTodo();


// (async()=>{
//     const response = await getSingleTodo();
    
//     console.log(response?.completed);
   
// })();

getSingleTodo().then((todo) => {
    console.log(todo?.id);
});