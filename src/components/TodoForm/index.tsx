import React from "react";
import { TodoFormWrapper } from "./styles";

function TodoForm() {
  return (
    <TodoFormWrapper>
      <input data-testid="new-todo-input" type="text" placeholder="할 일을 입력해주세요." />
      <button data-testid="new-todo-add-button" type="button">
        추가
      </button>
    </TodoFormWrapper>
  );
}

export default TodoForm;
