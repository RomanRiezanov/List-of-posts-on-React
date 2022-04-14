import React, { useEffect } from 'react';
import './styles/app.css';
import { AuthContext } from './context';
import { useState } from 'react';
import AppRouter from './components/AppRouter';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isLoading,
      }}
    >
      <AppRouter />
    </AuthContext.Provider>
  );
}
export default App;
