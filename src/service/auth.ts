import { AxiosError, AxiosResponse } from 'axios';
import { client } from './api';
import { errorResponse } from 'utils/errorResponse';

export const signupApi = async <T>(
  email: string,
  password: string,
): Promise<AxiosResponse<T> | string> => {
  try {
    const response = await client.post('auth/signup', {
      email,
      password,
    });
    return response;
  } catch (error) {
    return errorResponse(error as AxiosError);
  }
};

export const signinApi = async <T>(
  email: string,
  password: string,
): Promise<AxiosResponse<T> | string> => {
  try {
    const response = await client.post('auth/signin', {
      email,
      password,
    });
    return response;
  } catch (error) {
    return errorResponse(error as AxiosError);
  }
};
