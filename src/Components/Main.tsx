import React from "react";
import Todo from "./Todo/Todo";

export default class Main extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
   
    interface Person {
      name: string;
      age: number;
    }

    interface Todos {
      id: number;
      title: string;
      completed: boolean;
    }

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

    const people: Person[] = [
      { name: "John", age: 25 },
      { name: "Jane", age: 30 },
      { name: "Bob", age: 40 },
    ];

    return (
      <div>
        <h2>Main</h2>
        <Todo people={people} todos={todos}/>
      </div>
    );
  }
}
