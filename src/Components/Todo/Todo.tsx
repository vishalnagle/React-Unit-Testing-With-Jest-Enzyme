import React from "react";


interface Person{
    name:string,
    age:number
}

interface Todos{
    id:number,
    title:string,
    completed:boolean
}


interface MyComponentProps{
    people:Person[],
    todos:Todos[]
}
export default class Todo extends React.Component<MyComponentProps>{
    constructor(props:any){
        super(props)
    }

    render(){
        const todos = [
            {
              id: 1,
              title: "Wash dishes",
              completed: true,
            },
            {
              id: 2,
              title: "Watch movies",
              completed: false,
            },
            {
              id: 3,
              title: "Reading books",
              completed: true,
            },
          ];
        return <div>
            {todos.map((todo)=>{
                return <h1 data-testid={`todo-${todo.id}`} key={todo.id}>{todo.title}</h1>
            })}
        </div>
    }
}