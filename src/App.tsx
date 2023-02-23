import React, { useState } from 'react';
import './App.css';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { Amplify, API } from 'aws-amplify';

// import { createTodo, updateTodo, deleteTodo } from './graphql/mutations'
// import { listTodos } from './graphql/queries'


import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

function App() {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const toggleComplete: ToggleComplete = selectedTodo => {
    const updatedTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const addTodo: AddTodo = newTodo => {
    if (newTodo !== "") {
      // const result = API.graphql(
      //   createTodo({
      //     input: {
      //       text: newTodo,
      //       description: "test",
      //       complete: false
      //     }
      //   })
      // );

      setTodos([...todos, { text: newTodo, complete: false }]);
    }
  };

  const removeTodo: RemoveTodo = todoToRemove => {
    let updatedTodos: Array<Todo> = todos.filter(todo => todo.text != todoToRemove.text);
    setTodos(updatedTodos);
  }

  const editTodo: EditTodo = todoToEdit => {
    let todoToUpdateIndex: number = todos.findIndex(todo => todo.text == todoToEdit.text);
    console.log(todoToUpdateIndex);
  }

  return (
    <div className="todo-app">
      <header>
        <h1>
        Todo App
        </h1>
      </header>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} toggleComplete={toggleComplete} onRemoveTodo={removeTodo} editTodo={editTodo}/>
    </div>
  );
};

export default App;
