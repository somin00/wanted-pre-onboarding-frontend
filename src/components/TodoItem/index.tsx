import React, { useState } from "react";
import { TodoItemWrapper } from "./styles";
import { TodoType } from "types";

interface TodoItemProp {
  todoInfo: TodoType;
  deleteTodo: (id: number) => Promise<void>;
}
function TodoItem({ todoInfo, deleteTodo }: TodoItemProp) {
  const [editMode, setEditMode] = useState<boolean>(false);
  const handleClickEdit = () => {
    setEditMode(true);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
  };

  const handleDeleteTodo = () => {
    deleteTodo(todoInfo.id);
  };

  return (
    <TodoItemWrapper>
      <label>
        <input type="checkbox" />
        {editMode ? <input data-testid="modify-input" type="text" /> : <span>{todoInfo.todo}</span>}
      </label>
      {editMode ? (
        <>
          <button data-testid="submit-button" type="button">
            제출
          </button>
          <button data-testid="cancel-button" type="button" onClick={handleCancelEdit}>
            취소
          </button>
        </>
      ) : (
        <>
          <button data-testid="modify-button" type="button" onClick={handleClickEdit}>
            수정
          </button>
          <button data-testid="delete-button" type="button" onClick={handleDeleteTodo}>
            삭제
          </button>
        </>
      )}
    </TodoItemWrapper>
  );
}

export default TodoItem;
