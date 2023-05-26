import React, { FormEvent, useState, useRef } from "react";

interface InputsProps {
  addTodo: (newTodo: string) => void;
}

function Inputs({ addTodo }: InputsProps) {
  // For input textbox
  const [newTodo, setNewTodo] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Submit a todo item
  const submitTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // empty textbox upon submit
    if (newTodo === "") return;

    addTodo(newTodo);

    setNewTodo("");

    // Focus back into the textbox
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={`mb-3`}>
      <form onSubmit={submitTodo}>
        <input
          ref={inputRef}
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          type="text"
          placeholder="Add Todo"
          name="todo"
          className={`p-1 rounded-md mr-1 my-3 text-black`}
        />
        <button className={`bg-cyan-900 p-2 m-1 rounded-md`}>Add Todo</button>
      </form>
    </div>
  );
}

export default Inputs;
