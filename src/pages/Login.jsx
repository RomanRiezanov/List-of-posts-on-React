import React, { useContext } from 'react';
import Button from '../components/UI/button/Button';
import Input from '../components/UI/input/Input';
import { AuthContext } from '../context';

const Login = () => {
  alert('For Log in please push te button "Log in"!!!');
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  };

  return (
    <div>
      <h1>Page for Login</h1>
      <form onSubmit={login}>
        <Input type="text" placeholder="Enter your login" />
        <Input type="password" placeholder="Enter your passsword" />
        <Button>Log in</Button>
      </form>
    </div>
  );
};

export default Login;
