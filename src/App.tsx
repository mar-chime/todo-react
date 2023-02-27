import React, { useState, useEffect } from 'react';
import './App.css';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';

import { createTodo, updateTodo, deleteTodo } from './graphql/mutations'
import { listTodos } from './graphql/queries'

import { CreateTodoInput } from './API'

Amplify.configure(awsconfig);

function App() {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const allTodos = await API.graphql(graphqlOperation(listTodos)) as any;
    setTodos(allTodos.data.listTodos.items);
  }
    

  const toggleComplete: ToggleComplete = selectedTodo => {
    const updatedTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const addTodo: AddTodo = async newTodo => {
    if (newTodo !== "") {
      const createNewTodo: CreateTodoInput = {
        name: newTodo,
        completed: false
      }

      const result = await API.graphql(graphqlOperation(createTodo, { input: createNewTodo })) as any;

      if (result.data) {
        setTodos([...todos, result.data.createTodo]);
      }
    }
  };

  const removeTodo: RemoveTodo = async todoToRemove => {
    const deleteTodoInput = {
      id: todoToRemove.id
    }

    const deleteData = await API.graphql(graphqlOperation(deleteTodo, { input: deleteTodoInput })) as any;

    if (deleteData.data) {
      fetchTodos();
    }
  }

  return (
    <div className="todo-app">
      <header>
        <h1>
        Todo App
        </h1>
      </header>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} toggleComplete={toggleComplete} onRemoveTodo={removeTodo}/>
    </div>
  );
};

export default App;
