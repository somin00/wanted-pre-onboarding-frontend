import React from "react";
import AuthInput from "components/AuthInput";
import { AuthFromPropType } from "types";

function AuthForm({ info, setInfo }: AuthFromPropType) {
  return (
    <form>
      <AuthInput name="email" value={info.email} setInfo={setInfo} />
      <AuthInput name="password" value={info.password} setInfo={setInfo} />
    </form>
  );
}

export default AuthForm;
