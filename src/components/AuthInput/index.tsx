import React, { ChangeEvent } from "react";
import { AuthInputWrapper } from "./styles";
import { AuthInputPropType } from "types";
function AuthInput({ name, value, setInfo }: AuthInputPropType) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setInfo((prev) => {
      return {
        ...prev,
        [name]: value,
        isValidEmail: name === "email" ? value.includes("@") : prev.isValidEmail,
        isValidPassword: name === "password" ? value.length >= 8 : prev.isValidPassword,
      };
    });
  };
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
