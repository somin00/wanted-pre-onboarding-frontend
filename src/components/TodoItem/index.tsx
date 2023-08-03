import React, { useState } from "react";
import { TodoItemWrapper } from "./styles";

function TodoItem() {
  const [editMode, setEditMode] = useState<boolean>(false);
  const handleClickEdit = () => {
    setEditMode(true);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
  };

  return (
    <TodoItemWrapper>
      <label>
        <input type="checkbox" />
        {editMode ? <input data-testid="modify-input" type="text" /> : <span>TODO 1</span>}
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
          <button data-testid="delete-button" type="button">
            삭제
          </button>
        </>
      )}
    </TodoItemWrapper>
  );
}

export default TodoItem;
