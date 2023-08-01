import { Dispatch, SetStateAction } from "react";

export interface AuthType {
  email: string;
  password: string;
  isValidEmail: boolean;
  isValidPassword: boolean;
}

export interface AuthFromPropType {
  info: AuthType;
  setInfo: Dispatch<SetStateAction<AuthType>>;
}

export interface AuthInputPropType {
  name: string;
  value: string;
  setInfo: Dispatch<SetStateAction<AuthType>>;
}

export interface SigninReponseType {
  access_token: string;
}
