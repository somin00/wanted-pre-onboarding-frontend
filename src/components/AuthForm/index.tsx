import React from "react";
import AuthInput from "components/AuthInput";
import { AuthFromPropType } from "types";
import { AuthFormWrapper } from "./styles";

function AuthForm({ info, setInfo }: AuthFromPropType) {
  return (
    <AuthFormWrapper>
      <AuthInput name="email" value={info.email} setInfo={setInfo} />
      <AuthInput name="password" value={info.password} setInfo={setInfo} />
    </AuthFormWrapper>
  );
}

export default AuthForm;
