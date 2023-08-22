import { AxiosResponse, AxiosError } from 'axios';
import { client } from './api';
import { TodoType } from 'types';
import { errorResponse } from 'utils/errorResponse';

export const createTodoApi = async <T>(todo: string): Promise<AxiosResponse<T> | string> => {
  try {
    const response = await client.post('/todos', {
      todo,
    });
    return response;
  } catch (error) {
    return errorResponse(error as AxiosError);
  }
};

export const getTodoApi = async <T>(): Promise<AxiosResponse<T> | string> => {
  try {
    const response = await client.get('/todos');
    return response;
  } catch (error) {
    return errorResponse(error as AxiosError);
  }
};

export const deleteTodoApi = async <T>(id: number): Promise<AxiosResponse<T> | string> => {
  try {
    const response = await client.delete(`/todos/${id}`);
    return response;
  } catch (error) {
    return errorResponse(error as AxiosError);
  }
};

export const updateTodoApi = async <T>(todoInfo: TodoType): Promise<AxiosResponse<T> | string> => {
  const { id, todo, isCompleted } = todoInfo;

  try {
    const response = await client.put(`/todos/${id}`, {
      todo,
      isCompleted,
    });
    return response;
  } catch (error) {
    return errorResponse(error as AxiosError);
  }
};
