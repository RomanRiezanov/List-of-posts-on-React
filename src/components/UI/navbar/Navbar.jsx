import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context';
import '../../../styles/app.css';
import Button from '../button/Button';
import cl from './Navbar.module.css';

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  };

  return isAuth ? (
    <nav className={cl.navbar}>
      <div>
        <Link className={cl.navbar__link} to="/about">
          About
        </Link>
        <Link className={cl.navbar__link} to="/posts">
          Posts
        </Link>
      </div>
      <Button onClick={() => logout()}>Log Out</Button>
    </nav>
  ) : null;
};

export default Navbar;
