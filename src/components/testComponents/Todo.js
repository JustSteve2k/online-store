import React, { useState, useReducer } from "react";

import Note from "./Note";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
  TEST: "test",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          console.log(todo.complete);
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      // return todos;
      return todos.filter((todo) => todo.id !== action.payload.id);
    case ACTIONS.TEST:
      console.log("this was a test");
    default:
      return todos;
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

export default function Reducer() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }

  function handleTest() {
    dispatch({ type: ACTIONS.TEST });
  }

  return (
    <div style={{ width: "3rem", margin: "0rem auto 0rem" }}>
      <form onSubmit={handleSubmit}>
        <input style={{ border: "1px solid black" }} type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </form>
      {todos.map((todo) => {
        return <Note key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
      <button onClick={handleTest}>TEST</button>
    </div>
  );
}
