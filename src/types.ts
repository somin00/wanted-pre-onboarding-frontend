import { Dispatch, SetStateAction } from "react";

export interface AuthType {
  email: string;
  password: string;
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
