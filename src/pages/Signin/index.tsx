import React, { useState } from "react";
import AuthForm from "components/AuthForm";
import { SigninWrapper } from "./styles";
import { AuthType, SigninReponseType } from "types";
import { signinApi } from "service/auth";
import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();

  const [signinInfo, setSigninInfo] = useState<AuthType>({
    email: "",
    password: "",
    isValidEmail: false,
    isValidPassword: false,
  });
  const [signinError, setSigninError] = useState<string>("");

  const handleSubmit = async () => {
    setSigninError("");
    const { email, password } = signinInfo;
    const response = await signinApi(email, password);
    if (typeof response === "string") {
      setSigninError(response);
      return;
    }
    if (response.status === 200) {
      if (response.data) {
        const { access_token } = response.data as SigninReponseType;
        localStorage.setItem("access_token", access_token);
      }
      navigate("/todo");
    }
  };

  return (
    <SigninWrapper>
      <h1>로그인</h1>
      <AuthForm info={signinInfo} setInfo={setSigninInfo} />
      {signinError && <p>{signinError}</p>}
      <button
        data-testid="signin-button"
        type="button"
        disabled={!signinInfo.isValidEmail || !signinInfo.isValidPassword ? true : false}
        onClick={handleSubmit}
      >
        로그인
      </button>
    </SigninWrapper>
  );
}

export default Signin;
