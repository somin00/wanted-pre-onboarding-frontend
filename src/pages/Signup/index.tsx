import React, { useState } from "react";
import { SignupWrapper } from "./styles";
import AuthForm from "components/AuthForm";
import { AuthType } from "types";

function Signup() {
  const [signupInfo, setSignupInfo] = useState<AuthType>({
    email: "",
    password: "",
    isValidEmail: false,
    isValidPassword: false,
  });

  return (
    <SignupWrapper>
      <h1>회원가입</h1>
      <AuthForm info={signupInfo} setInfo={setSignupInfo} />
      <button
        data-testid="signup-button"
        disabled={!signupInfo.isValidEmail || !signupInfo.isValidPassword ? true : false}
      >
        회원가입
      </button>
    </SignupWrapper>
  );
}

export default Signup;
