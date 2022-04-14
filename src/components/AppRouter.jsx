import React, { useContext } from 'react';
import { privateRoutes, publicRoutes } from '../router/index';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { AuthContext } from '../context';
import Navbar from '../components/UI/navbar/Navbar';
import Error from '../pages/Error';
import Login from '../pages/Login';
import Loader from './UI/loader/Loader';

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  // if (isLoading) {
  //   return <Loader />;
  // }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="" element={<Login />}></Route>
      </Routes>
      {isAuth ? (
        <Routes>
          {privateRoutes.map((route, index) => {
            return (
              <Route key={index} path={route.path} element={route.element} />
            );
          })}
          <Route path="*" element={<Navigate replace to="/posts" />} />
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map((route, index) => {
            return (
              <Route key={index} path={route.path} element={route.element} />
            );
          })}
          <Route path="*" element={<Navigate replace to="/login" />} />
        </Routes>
      )}
      <Routes>
        <Route path="/404" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
