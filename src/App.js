import React, { useState } from 'react';
import LoginPage from './LoginPage';
import HomePage from './HomePage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <HomePage onLogout={handleLogout} />
      )}
    </div>
  );
};

export default App;
