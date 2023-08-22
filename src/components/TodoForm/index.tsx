import React, { FormEvent, useRef, RefObject, useCallback } from 'react';
import { TodoFormWrapper } from './styles';

interface TodoFormProp {
  submitTodo: (e: FormEvent<HTMLFormElement>, inputRef: RefObject<HTMLInputElement>) => void;
}
function TodoForm({ submitTodo }: TodoFormProp) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmitInput = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      submitTodo(e, inputRef);
    },
    [submitTodo],
  );
  return (
    <TodoFormWrapper onSubmit={handleSubmitInput}>
      <input
        data-testid="new-todo-input"
        type="text"
        ref={inputRef}
        placeholder="할 일을 입력해주세요."
      />
      <button data-testid="new-todo-add-button">추가</button>
    </TodoFormWrapper>
  );
}

export default TodoForm;
