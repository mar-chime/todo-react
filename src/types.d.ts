type AddTodo = (newTodo: string) => void;
type RemoveTodo = (todoToRemove: Todo) => void;
type EditTodo = (todoToEdit: Todo) => void;

type Todo = {
  id?: string | null,
  name: string,
  description?: string | null,
  completed?: boolean | null,
}

type ToggleComplete = (selectedTodo: Todo) => void;

type Option = {
  value: string;
  onClick: () => void;
  color?: string;
}
