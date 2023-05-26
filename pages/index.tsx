import { useState, useEffect } from "react";
import Inputs from "../pages/components/Inputs";
import TodoList from "../pages/components/TodoList";

export default function Home() {
  // Set type of TodoItems object properties
  interface TodoItem {
    id: string;
    title: string;
    completed: boolean;
  }

  // Add todo item
  const addTodo = (title: string) => {
    setTodoItems((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  };
  // For the todo items array
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     localStorage.setItem("ITEMS", JSON.stringify(todoItems));
  //   }
  // }, [todoItems]);

  // Toggle the todo item if done
  const toggleTodo = (id: string, completed: boolean) => {
    setTodoItems((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };

  // Delete the todo item
  const deleteTodo = (id: string) => {
    setTodoItems((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <main>
      <div className={`flex items-center h-screen flex-col mx-20 mt-10`}>
        <Inputs addTodo={addTodo} />
        <TodoList
          todoItems={todoItems}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </main>
  );
}
