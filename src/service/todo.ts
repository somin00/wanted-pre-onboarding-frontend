import { AxiosResponse, isAxiosError } from "axios";
import { client } from "./api";

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
