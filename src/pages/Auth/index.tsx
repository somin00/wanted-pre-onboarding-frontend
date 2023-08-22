import React, { useState, FormEvent, useEffect, useCallback } from 'react';
import { AuthWrapper } from './styles';
import AuthForm from 'components/AuthForm';
import { AuthType, SigninReponseType } from 'types';
import { signupApi, signinApi } from 'service/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { client } from 'service/api';

const initUserInfo: AuthType = {
  email: '',
  password: '',
  isValidEmail: false,
  isValidPassword: false,
};

function Auth() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState<AuthType>(initUserInfo);

  const [error, setError] = useState<string>('');

  const handleSubmitSignup = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setError('');
      const { email, password } = userInfo;
      const response = await signupApi(email, password);
      if (typeof response === 'string') {
        setError(response);
        return;
      }
      if (response.status === 201) {
        navigate('/signin');
      }
    },
    [navigate, userInfo],
  );

  const handleSubmitSignin = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setError('');
      const { email, password } = userInfo;
      const response = await signinApi(email, password);
      if (typeof response === 'string') {
        setError(response);
        return;
      }
      if (response.status === 200) {
        if (response.data) {
          const { access_token } = response.data as SigninReponseType;
          client.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
          localStorage.setItem('access_token', access_token);
        }
        navigate('/todo');
      }
    },
    [navigate, userInfo],
  );

  useEffect(() => {
    setUserInfo(initUserInfo);
  }, [pathname]);

  return (
    <AuthWrapper>
      <h1>{pathname === '/signup' ? '회원가입' : '로그인'}</h1>
      <form onSubmit={pathname === '/signup' ? handleSubmitSignup : handleSubmitSignin}>
        <AuthForm info={userInfo} setInfo={setUserInfo} />
        {error && <p>{error}</p>}
        <button
          data-testid={pathname === '/signup' ? 'signup-button' : 'signin-button'}
          type="submit"
          disabled={!userInfo.isValidEmail || !userInfo.isValidPassword ? true : false}
        >
          {pathname === '/signup' ? '회원가입' : '로그인'}
        </button>
      </form>
    </AuthWrapper>
  );
}
export default Auth;
