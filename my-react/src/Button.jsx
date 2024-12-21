import React from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles"; // Импортируем создание тем и провайдер тем
import LoadingButton from "@mui/lab/LoadingButton"; // Кнопка с индикатором загрузки
import PlayArrowIcon from "@mui/icons-material/PlayArrow"; // Иконка стрелки воспроизведения
import TerminalIcon from "@mui/icons-material/Terminal"; // Иконка терминала
import ButtonGroup from "@mui/material/ButtonGroup"; // Группа кнопок
import CircularProgress from '@mui/material/CircularProgress'; // Индикатор загрузки

// Создаём тему с кастомной палитрой
const theme = createTheme({
  palette: {
    customColor: {
      main: "#1b5e20", // Кастомный зелёный цвет для кнопок
    },
    primary: {
        main: '#1976d2', // Цвет индикатора загрузки
    },
  },
});

function BasicGroup() {
  const [loading, setLoading] = React.useState(false); // Состояние загрузки для первой кнопки
  const [loading2, setLoading2] = React.useState(false); // Состояние загрузки для второй кнопки

  // Обработчик клика для первой кнопки
  const handleClick = () => {
    setLoading(true); // Включаем индикатор загрузки
    setTimeout(() => {
      setLoading(false); // Выключаем индикатор загрузки через 2 секунды
    }, 2000);
  };

  // Обработчик клика для второй кнопки
  const handleClick2 = () => {
    setLoading2(true); // Включаем индикатор загрузки
    setTimeout(() => {
      setLoading2(false); // Выключаем индикатор загрузки через 2 секунды
    }, 2000);
  };

  return (
    <ThemeProvider theme={theme}> {/* Применяем тему через ThemeProvider */}
      <ButtonGroup
        color="customColor" // Устанавливаем кастомный цвет
        variant="outlined" // Контурный стиль кнопок
        aria-label="Small button group" // Атрибут для доступности
      >
        {/* Первая кнопка с индикатором загрузки */}
        <LoadingButton
          onClick={handleClick} // Обработчик клика
          loading={loading} // Состояние загрузки
          startIcon={<PlayArrowIcon />} // Иконка в начале кнопки
          loadingIndicator={<CircularProgress color="customColor" size={16} />} // Индикатор загрузки
          sx={{
            borderColor: theme.palette.customColor.main, // Цвет обводки кнопки
            '&.MuiLoadingButton-loading': {
              borderColor: theme.palette.customColor.main, // Цвет обводки при загрузке
            },
          }}
        >
          Run {/* Текст кнопки */}
        </LoadingButton>
        
        {/* Вторая кнопка с индикатором загрузки */}
        <LoadingButton
          onClick={handleClick2} // Обработчик клика
          loading={loading2} // Состояние загрузки
          startIcon={<TerminalIcon />} // Иконка в начале кнопки
          loadingIndicator={<CircularProgress color="customColor" size={16} />} // Индикатор загрузки
          sx={{
            borderColor: theme.palette.customColor.main, // Цвет обводки кнопки
            '&.MuiLoadingButton-loading': {
              borderColor: theme.palette.customColor.main, // Цвет обводки при загрузке
            },
          }}
        >
          Submit {/* Текст кнопки */}
        </LoadingButton>
      </ButtonGroup>
    </ThemeProvider>
  );
}

export default BasicGroup; // Экспорт компонента
