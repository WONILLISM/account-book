import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleGoToAppClick = () => {
    navigate('/dashboard');
  };

  return (
    <div>
      <Button variant='contained' onClick={handleGoToAppClick}>
        Go To App
      </Button>
    </div>
  );
};

export default Login;
