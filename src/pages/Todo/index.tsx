import React, { FormEvent, RefObject, useEffect, useState } from "react";
import { TodoWrapper } from "./styles";
import TodoForm from "components/TodoForm";
import TodoItem from "components/TodoItem";
import { TodoType } from "types";
import { createTodoApi, getTodoApi } from "service/todo";
function Todo() {
  const [todoList, setTodoList] = useState<TodoType[]>([]);
  const [failLoad, setFailLoad] = useState<string>("");
  const [failAdd, setFailAdd] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>, inputRef: RefObject<HTMLInputElement>) => {
    e.preventDefault();
    setFailAdd("");
    if (!inputRef.current) return;
    if (inputRef.current.value.trim().length === 0) {
      setFailAdd("할 일을 입력해주세요.");
      return;
    }
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

  useEffect(() => {
    setFailAdd("");
    setFailLoad("");
    getTodoApi().then((response) => {
      if (typeof response === "string") {
        setFailLoad("데이터를 불러오지 못했습니다.");
        return;
      }
      if (response.status === 200) {
        setTodoList(response.data as TodoType[]);
      }
    });
  }, []);

  return (
    <TodoWrapper>
      <h1>투두페이지</h1>
      <TodoForm submitTodo={handleSubmit} />
      {failAdd && <p>{failAdd}</p>}
      {failLoad ? (
        <p>{failLoad}</p>
      ) : (
        <ul>
          {todoList.map((todo) => (
            <TodoItem key={todo.id} todoInfo={todo} />
          ))}
        </ul>
      )}
    </TodoWrapper>
  );
}

export default Todo;
