import React, { FormEvent, RefObject, useState } from "react";
import { TodoWrapper } from "./styles";
import TodoForm from "components/TodoForm";
import TodoItem from "components/TodoItem";
import { TodoType } from "types";
import { createTodoApi } from "service/todo";
function Todo() {
  const [todoList, setTodoList] = useState<TodoType[]>([]);
  const [failAdd, setFailAdd] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>, inputRef: RefObject<HTMLInputElement>) => {
    e.preventDefault();
    setFailAdd("");
    if (!inputRef.current) return;
    const response = await createTodoApi(inputRef.current.value);
    if (typeof response === "string") {
      setFailAdd("다시 시도해주세요.");
      return;
    }
    if (response.status === 201) {
      setTodoList((prev) => {
        return [...prev, response.data as TodoType];
      });
      inputRef.current!.value = "";
    }
  };

  return (
    <TodoWrapper>
      <h1>투두페이지</h1>
      <TodoForm submitTodo={handleSubmit} />
      {failAdd && <p>{failAdd}</p>}
      <ul>
        <TodoItem />
      </ul>
    </TodoWrapper>
  );
}

export default Todo;
