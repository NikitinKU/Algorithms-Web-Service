import { useState } from "react"; // Хук для управления состоянием
import './styles.css'; // Подключаем стили
import { useNavigate } from "react-router-dom"; // Хук для навигации

const Register = () => {
    // Состояние для хранения данных формы
    const [formData, setFormData] = useState({
        username: "", // Имя пользователя
        password: "", // Пароль
    });

    // Инициализация хука навигации
    const navigate = useNavigate(); 

    // Обработчик изменений в полях формы
    const handleChange = (e) => {
        setFormData({
            ...formData, // Сохраняем старые данные
            [e.target.name]: e.target.value, // Обновляем значение поля
        });
    };

    // Обработчик отправки формы
    const handleSubmit = (e) => {
        e.preventDefault(); // Отменяем стандартное поведение формы
        console.log("Username:", formData.username); // Логируем имя пользователя
        console.log("Password:", formData.password); // Логируем пароль

        // Сохраняем данные в localStorage
        localStorage.setItem('user', JSON.stringify(formData));

        // Переходим на страницу списка задач
        navigate("/ListTasks"); // Используем navigate для перехода
    };

    return (
        <div className="container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                {/* Поле для ввода имени пользователя */}
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username} // Значение поля
                    onChange={handleChange} // Обработчик изменений
                    required // Обязательное поле
                />
                {/* Поле для ввода пароля */}
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password} // Значение поля
                    onChange={handleChange} // Обработчик изменений
                    required // Обязательное поле
                />
                {/* Кнопка отправки формы */}
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register; // Экспортируем компонент
