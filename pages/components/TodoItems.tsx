import React from "react";

interface TodoItemsProps {
  completed: boolean;
  id: string;
  title: string;
  toggleTodo: (id: string, completed: boolean) => void;
  deleteTodo: (id: string) => void;
}

function TodoItems({
  completed,
  id,
  title,
  toggleTodo,
  deleteTodo,
}: TodoItemsProps) {
  return (
    <li className={`bg-cyan-900 p-1 rounded-md mb-2 max-w-xl w-96`}>
      <div
        className={`flex justify-center items-center bg-cyan-700 rounded-md p-2`}
      >
        <label
          className={`w-80 break-words ${
            completed && "line-through text-gray-300"
          }`}
        >
          {title}
        </label>
      </div>
      <div className={`flex justify-evenly my-2`}>
        <div>
          <input
            type="checkbox"
            id={id}
            checked={completed}
            onChange={(e) => toggleTodo(id, e.target.checked)}
            className={`mr-2`}
          />
          <label htmlFor={id} className={`cursor-pointer select-none`}>
            Done
          </label>
        </div>
        <div>
          <button
            className={`rounded bg-red-700 hover:bg-red-600 text-white px-5 select-none`}
            onClick={() => deleteTodo(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}

export default TodoItems;
