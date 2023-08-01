import React from "react";
import { AuthInputWrapper } from "./styles";
function AuthInput() {
  return (
    <AuthInputWrapper>
      <label htmlFor="email">이메일</label>
      <input type="text" id="email" />
    </AuthInputWrapper>
  );
}

export default AuthInput;
