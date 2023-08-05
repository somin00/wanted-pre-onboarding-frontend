import React, { FormEvent, RefObject, useCallback, useEffect, useState } from "react";
import { TodoWrapper } from "./styles";
import TodoForm from "components/TodoForm";
import TodoItem from "components/TodoItem";
import { TodoType } from "types";
import { createTodoApi, deleteTodoApi, getTodoApi, updateTodoApi } from "service/todo";
function Todo() {
  const [todoList, setTodoList] = useState<TodoType[]>([]);
  const [failMessage, setFailMessage] = useState<string>("");
  const [failLoad, setFailLoad] = useState<string>("");

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>, inputRef: RefObject<HTMLInputElement>) => {
    e.preventDefault();
    setFailMessage("");
    if (!inputRef.current) return;
    if (inputRef.current.value.trim().length === 0) {
      setFailMessage("할 일을 입력해주세요.");
      return;
    }
    const response = await createTodoApi(inputRef.current.value);
    if (typeof response === "string") {
      setFailMessage("다시 시도해주세요.");
      return;
    }
    if (response.status === 201) {
      setTodoList((prev) => {
        return [...prev, response.data as TodoType];
      });
      inputRef.current!.value = "";
    }
  }, []);

  const handleEditTodo = useCallback(
    async (todoInfo: TodoType) => {
      setFailMessage("");
      if (todoInfo.todo.trim().length === 0) {
        setFailMessage("수정할 내용을 입력해주세요.");
        return;
      }
      const response = await updateTodoApi(todoInfo);

      if (typeof response === "string") {
        setFailMessage("내용 수정을 실패했습니다.");
        return;
      }
      if (response.status === 200) {
        const data = response.data as TodoType;
        const newTodoList = todoList.map((todo) => {
          if (todo.id === data.id) {
            return (todo = data);
          } else {
            return todo;
          }
        });
        setTodoList(newTodoList);
      }
    },
    [todoList]
  );

  const handleEditComplete = useCallback(
    async (todoInfo: TodoType) => {
      setFailMessage("");
      const response = await updateTodoApi(todoInfo);

      if (typeof response === "string") {
        setFailMessage("완료 여부 수정을 실패했습니다.");
        return;
      }
      if (response.status === 200) {
        const data = response.data as TodoType;
        const newTodoList = todoList.map((todo) => {
          if (todo.id === data.id) {
            return (todo = data);
          } else {
            return todo;
          }
        });
        setTodoList(newTodoList);
      }
    },
    [todoList]
  );

  const handleDelete = useCallback(async (id: number) => {
    setFailMessage("");
    const response = await deleteTodoApi(id);
    if (typeof response === "string") {
      setFailMessage("목록 삭제에 실패했습니다.");
      return;
    }
    if (response.status === 204) {
      setTodoList((prev) => prev.filter((todo) => todo.id !== id));
    }
  }, []);

  useEffect(() => {
    setFailMessage("");
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
      {failMessage && <p>{failMessage}</p>}
      {failLoad ? (
        <p>{failLoad}</p>
      ) : (
        <ul>
          {todoList.map((todo) => (
            <TodoItem
              key={todo.id}
              todoInfo={todo}
              handleEditTodo={handleEditTodo}
              handleEditComplete={handleEditComplete}
              deleteTodo={handleDelete}
            />
          ))}
        </ul>
      )}
    </TodoWrapper>
  );
}

export default Todo;
