import React from "react";
import TodoItem from "./TodoItems";

interface TodoItem {
  id: string;
  title: string;
  completed: boolean;
}

interface TodoListProps {
  todoItems: TodoItem[];
  toggleTodo: (id: string, completed: boolean) => void;
  deleteTodo: (id: string) => void;
}

function TodoList({ todoItems, toggleTodo, deleteTodo }: TodoListProps) {
  return (
    <ul>
      {todoItems.length === 0 && "No Todos Yet :("}
      {todoItems.map((todo) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
