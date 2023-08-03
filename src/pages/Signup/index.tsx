import React, { useState } from "react";
import { SignupWrapper } from "./styles";
import AuthForm from "components/AuthForm";
import { AuthType } from "types";
import { signupApi } from "service/auth";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [signupInfo, setSignupInfo] = useState<AuthType>({
    email: "",
    password: "",
    isValidEmail: false,
    isValidPassword: false,
  });
  const [signupError, setSignupError] = useState<string>("");

  const handleSubmit = async () => {
    setSignupError("");
    const { email, password } = signupInfo;
    const response = await signupApi(email, password);
    if (typeof response === "string") {
      setSignupError(response);
      return;
    }
    if (response.status === 201) {
      navigate("/signin");
    }
  };

  return (
    <SignupWrapper>
      <h1>회원가입</h1>
      <AuthForm info={signupInfo} setInfo={setSignupInfo} />
      {signupError && <p>{signupError}</p>}
      <button
        data-testid="signup-button"
        type="button"
        disabled={!signupInfo.isValidEmail || !signupInfo.isValidPassword ? true : false}
        onClick={handleSubmit}
      >
        회원가입
      </button>
    </SignupWrapper>
  );
}

export default Signup;
