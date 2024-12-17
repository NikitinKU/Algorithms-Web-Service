// import React from 'react';
import { useState } from 'react';
// Импортируем компоненты
import Register from "./Register";
import Problems from './Problems'; 
import AccountButton from "./AccountButton";
import Account from './Account';

import './styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
    const [avatarSrc, setAvatarSrc] = useState('');

    return (
        <Router>
            {/* AccountButton выносим за пределы Routes, чтобы он был всегда доступен */}
            <AccountButton avatarSrc={avatarSrc} />

            {/* Маршруты */}
            <Routes>
                <Route path="/" element={<Register />} /> {/* Страница регистрации */}
                <Route path="/problems" element={<Problems />} /> {/* Страница задач */}
                <Route 
                    path="/account" 
                    element={<Account setAvatarSrc={setAvatarSrc} />} 
                /> {/* Страница личного кабинета */}
            </Routes>
        </Router>
    );
};

export default App;
