import React from "react";
import { TodoWrapper } from "./styles";
import TodoForm from "components/TodoForm";
import TodoItem from "components/TodoItem";
function Todo() {
  return (
    <TodoWrapper>
      <h1>투두페이지</h1>
      <TodoForm />
      <ul>
        <TodoItem />
      </ul>
    </TodoWrapper>
  );
}

export default Todo;
