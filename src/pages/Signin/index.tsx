import React, { useState } from "react";
import AuthForm from "components/AuthForm";
import { SigninWrapper } from "./styles";
import { AuthType } from "types";

function Signin() {
  const [signinInfo, setSigninInfo] = useState<AuthType>({
    email: "",
    password: "",
    isValidEmail: false,
    isValidPassword: false,
  });

  return (
    <SigninWrapper>
      <h1>로그인</h1>
      <AuthForm info={signinInfo} setInfo={setSigninInfo} />
      <button
        data-testid="signin-button"
        disabled={!signinInfo.isValidEmail || !signinInfo.isValidPassword ? true : false}
      >
        로그인
      </button>
    </SigninWrapper>
  );
}

export default Signin;
