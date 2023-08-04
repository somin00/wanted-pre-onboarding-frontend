import { AxiosResponse, isAxiosError } from "axios";
import { client } from "./api";
import { TodoType } from "types";

export const createTodoApi = async <T>(todo: string): Promise<AxiosResponse<T> | string> => {
  try {
    const response = await client.post(
      "/todos",
      {
        todo,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
    return response;
  } catch (error) {
    let errorText = "";

    if (isAxiosError(error)) {
      errorText = error.response?.data.message;
    }
    return errorText;
  }
};

export const getTodoApi = async <T>(): Promise<AxiosResponse<T> | string> => {
  try {
    const response = await client.get("/todos", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });
    return response;
  } catch (error) {
    let errorText = "";

    if (isAxiosError(error)) {
      errorText = error.response?.data.message;
    }
    return errorText;
  }
};

export const deleteTodoApi = async <T>(id: number): Promise<AxiosResponse<T> | string> => {
  try {
    const response = await client.delete(`/todos/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });
    return response;
  } catch (error) {
    let errorText = "";

    if (isAxiosError(error)) {
      errorText = error.response?.data.message;
    }
    return errorText;
  }
};

export const updateTodoApi = async <T>(todoInfo: TodoType): Promise<AxiosResponse<T> | string> => {
  const { id, todo, isCompleted } = todoInfo;

  try {
    const response = await client.put(
      `/todos/${id}`,
      {
        todo,
        isCompleted,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
    return response;
  } catch (error) {
    let errorText = "";

    if (isAxiosError(error)) {
      errorText = error.response?.data.message;
    }
    return errorText;
  }
};
