import React, { ChangeEvent, useCallback } from "react";
import { AuthInputWrapper } from "./styles";
import { AuthInputPropType } from "types";
function AuthInput({ name, value, setInfo }: AuthInputPropType) {
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.currentTarget;
      setInfo((prev) => {
        return {
          ...prev,
          [name]: value,
          isValidEmail: name === "email" ? value.includes("@") : prev.isValidEmail,
          isValidPassword: name === "password" ? value.length >= 8 : prev.isValidPassword,
        };
      });
    },
    [setInfo]
  );
  return (
    <AuthInputWrapper>
      {name === "email" ? <label htmlFor="email">이메일</label> : <label htmlFor="password">비밀번호</label>}
      <input
        data-testid={`${name}-input`}
        type={name === "email" ? "text" : "password"}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        autoComplete={name === "password" ? "autoComplete" : ""}
      />
    </AuthInputWrapper>
  );
}

export default AuthInput;
