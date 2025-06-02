/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { useApiRequest } from '../../hooks';
import { loginService } from '../../api';
// import { LoginUI } from '../../features/login';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const {
    run: runLogin,
    data: loginResponse,
    error,
    requestStatus
  } = useApiRequest({});

  const onSubmit = (data: {
    email: string;
    password: string;
  }) => {
    runLogin(loginService(data));
  };

  const homeRoute = () => {
    navigate('/');
  };

  useEffect(() => {
    if (loginResponse?.status === 200) {
      toast.success('Login successful');
      localStorage.setItem("staffID", loginResponse.data?.user?.staff_id);
    } else if (error) {
      toast.error(error?.response?.data?.message);
    }
  }, [loginResponse, error]);

  return (
    <>
      {/* <LoginUI isLoading={requestStatus.isPending} onSubmit={onSubmit} homeRoute={homeRoute} /> */}
    </>

  )
}

export { Login }
