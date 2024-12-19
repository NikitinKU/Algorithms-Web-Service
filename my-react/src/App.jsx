// import React, 
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// Импортируем компоненты
import Register from "./Register";
import Problems from './Problems'; 
import AccountButton from "./AccountButton";
import Account from './Account';
import './styles.css';

const App = () => {
  const [avatarSrc, setAvatarSrc] = useState('');

  // Компонент для отображения кнопки личного кабинета
  const AccountButtonWrapper = () => {
    const location = useLocation();

    // Показываем кнопку только на странице `/problems`
    if (location.pathname === '/problems') {
      return <AccountButton avatarSrc={avatarSrc} />;
    }
    return null;
  };

  return (
    <Router>
      <AccountButtonWrapper /> {/* Кнопка отображается только для страницы задач */}
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/account" element={<Account setAvatarSrc={setAvatarSrc} />} />
      </Routes>
    </Router>
  );
};

export default App;
