// Импортируем необходимые компоненты
import Splitter, { SplitDirection } from '@devbookhq/splitter'; // Компонент для разделения области на панели
import './styles.css'; // Подключаем стили
import BasicGroup from './Button.jsx'; // Кнопки с индикаторами загрузки
import AccountMenu from './AccountButton.jsx'; // Кнопка для аккаунта пользователя

const Problems = () => {
    return (       
        <div style={{ width: '100dvw', height: '100dvh', display: 'flex', flexDirection: 'column' }}>
            {/* Верхняя панель с кнопками */}
            <div style={{ height: '5dvh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <BasicGroup /> {/* Компонент с кнопками */}
                <AccountMenu /> {/* Компонент кнопки аккаунта */}
            </div>
            {/* Разделение контента на горизонтальные и вертикальные панели */}
            <Splitter direction={SplitDirection.Horizontal}>
                {/* Левый блок с описанием задачи */}
                <div style={{ padding: '20px', height: '100%' }}>
                    <h3>Задача:</h3>
                    <p>Постановка задачи:</p>
                </div>
                {/* Правый блок с кодом и консолью */}
                <div style={{ padding: '0px', height: '100%' }}>
                    <Splitter direction={SplitDirection.Vertical}>
                        {/* Текстовое поле для написания кода */}
                        <textarea placeholder="Ваш код..." style={{ width: '100%', height: '80%' }}></textarea>
                        <h3>Консоль:</h3> {/* Место для вывода консольных сообщений */}
                    </Splitter>
                </div>
            </Splitter>
        </div>
    );
};

export default Problems;
