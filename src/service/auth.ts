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

export const signinApi = async <T>(email: string, password: string): Promise<AxiosResponse<T> | string> => {
  try {
    const response = await client.post("auth/signin", {
      email,
      password,
    });
    return response;
  } catch (error) {
    let errorText = "";
    if (isAxiosError(error)) {
      errorText = error.response?.data.message;
    }
    if (errorText === "Unauthorized") {
      errorText = "잘못된 로그인 정보입니다.";
    }
    return errorText;
  }
};
