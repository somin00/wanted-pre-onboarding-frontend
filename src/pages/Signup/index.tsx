import React from "react";
import { SignupWrapper } from "./styles";
import AuthForm from "components/AuthForm";

function Signup() {
  return (
    <SignupWrapper>
      <h1>회원가입 페이지</h1>
      <AuthForm />
      <button data-testid="signup-button">회원가입</button>
    </SignupWrapper>
  );
}

export default Signup;
