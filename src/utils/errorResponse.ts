import { AxiosError, isAxiosError } from "axios";
import { ErrorType } from "types";

export const errorResponse = (error: AxiosError) => {
  let errorText = "";
  if (isAxiosError(error)) {
    if (error.response) {
      const data = error.response.data as ErrorType;
      errorText = data.message;

      if (errorText === "Unauthorized") {
        errorText = "잘못된 로그인 정보입니다.";
      }
    }
  }
  return errorText;
};
