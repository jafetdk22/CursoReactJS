import { AppUI } from "./AppUI";
import React from "react";
import { useState } from "react";
// import { useLocalStorage } from './useLocalStorage';
import { TodoProvider } from '../TodoContext';


// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Tomar el curso de React", completed: false },
//   { text: "Llorar con la llorona", completed: false },
//   { text: "Lalalalala", completed: false },
//   { text: "Usar estados derivados", completed: false },
// ];
// localStorage.getItem("TODOS_V1", defaultTodos);
//localStorage.removeItem("TODOS_V1");

function App() {
  
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );

}

export default App;
