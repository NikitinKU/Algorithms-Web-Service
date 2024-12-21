import { StrictMode } from 'react'; // Импортируем StrictMode из React для включения дополнительных проверок в процессе разработки
import { createRoot } from 'react-dom/client'; // Импортируем createRoot для рендеринга в React 18
import './index.css'; // Подключаем глобальные стили CSS
import App from './App.jsx'; // Импортируем основной компонент App

// Рендерим приложение в DOM-элемент с id 'root'
createRoot(document.getElementById('root')).render(
  <StrictMode> {/* StrictMode помогает обнаруживать потенциальные проблемы в приложении во время разработки */}
    <App /> {/* Основной компонент приложения */}
  </StrictMode>,
);
