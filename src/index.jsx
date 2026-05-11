// Импортирует библиотеку React для создания компонентов и использования JSX
import React from 'react';
// Импортирует ReactDOM для работы с DOM: рендеринга компонентов в реальный DOM-элемент
import ReactDOM from 'react-dom/client';
// Импортирует глобальные стили, которые будут применяться ко всему приложению
import './index.css';
// Импортирует главный компонент приложения App (корневой компонент)
import App from './App';
// Импортирует функцию reportWebVitals для измерения производительности приложения
import reportWebVitals from './reportWebVitals';
// Создаёт корневой узел React, привязанный к DOM-элементу с id="root"
const root = ReactDOM.createRoot(document.getElementById('root'));
// Вызывает метод render у корневого узла для отображения React-компонентов на странице
root.render(
  // Оборачивает компонент App в React.StrictMode — инструмент для выявления потенциальных проблем
  <React.StrictMode>
    {/* Рендерит главный компонент приложения */}
    <App />
  </React.StrictMode>
);

// Запускает сбор метрик производительности (например, время загрузки, рендеринга)
reportWebVitals();
