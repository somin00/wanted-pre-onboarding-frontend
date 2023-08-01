import React from "react";
import AuthForm from "components/AuthForm";
import { SigninWrapper } from "./styles";

function Signin() {
  return (
    <SigninWrapper>
      <h1>로그인 페이지</h1>
      <AuthForm />
      <button data-testid="signin-button">로그인</button>
    </SigninWrapper>
  );
}

export default Signin;
