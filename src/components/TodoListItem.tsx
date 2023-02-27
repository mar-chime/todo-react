import React, { useState } from "react";
import { Dropdown } from "./Dropdown";

interface TodoListItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
  onRemoveTodo: RemoveTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleComplete, onRemoveTodo }) => {
  const onDelete = () => {
    onRemoveTodo(todo);
  }


  const dropdownOptions: Array<Option> = [
    {
      value: "Delete",
      onClick: onDelete,
      color: "red",
    }
  ]
  return (
    <li className={todo.completed? "todo-row completed" : "todo-row"}>
      <label>{todo.name}</label>
      <Dropdown
        options={dropdownOptions}
      />
    </li>
  )
}
