import { AxiosResponse, isAxiosError } from "axios";
import { client } from "./api";

export const signupApi = async <T>(email: string, password: string): Promise<AxiosResponse<T> | string> => {
  try {
    const response = await client.post("auth/signup", {
      email,
      password,
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
