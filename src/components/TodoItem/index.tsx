import React, { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import { TodoItemWrapper } from './styles';
import { TodoType } from 'types';

interface TodoItemProp {
  todoInfo: TodoType;
  handleEditTodo: (todoInfo: TodoType) => Promise<void>;
  handleEditComplete: (todoInfo: TodoType) => Promise<void>;
  deleteTodo: (id: number) => Promise<void>;
}
function TodoItem({ todoInfo, handleEditTodo, handleEditComplete, deleteTodo }: TodoItemProp) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editedTodo, setEditedTodo] = useState<TodoType>(todoInfo);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setEditedTodo(prev => {
      return {
        ...prev,
        todo: value,
      };
    });
  }, []);

  const handleClickEdit = useCallback(() => {
    setEditMode(true);
  }, []);

  const handleToggleComplete = useCallback(() => {
    setEditedTodo(prev => {
      return {
        ...prev,
        isCompleted: !prev.isCompleted,
      };
    });
    handleEditComplete({ ...editedTodo, isCompleted: !editedTodo.isCompleted });
  }, [editedTodo, handleEditComplete]);

  const handleSubmit = useCallback(async () => {
    handleEditTodo(editedTodo);
    setEditMode(false);
  }, [editedTodo, handleEditTodo]);

  const handleCancelEdit = useCallback(() => {
    setEditedTodo(todoInfo);
    setEditMode(false);
  }, [todoInfo]);

  const handleDeleteTodo = useCallback(() => {
    deleteTodo(todoInfo.id);
  }, [deleteTodo, todoInfo.id]);

  useEffect(() => {
    if (editMode) {
      inputRef.current?.focus();
    }
  }, [editMode]);

  return (
    <TodoItemWrapper>
      <label>
        <input type="checkbox" checked={editedTodo.isCompleted} onChange={handleToggleComplete} />
        {editMode ? (
          <input
            data-testid="modify-input"
            type="text"
            ref={inputRef}
            value={editedTodo.todo}
            onChange={handleChange}
          />
        ) : (
          <span>{todoInfo.todo}</span>
        )}
      </label>
      {editMode ? (
        <>
          <button data-testid="submit-button" type="button" onClick={handleSubmit}>
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
