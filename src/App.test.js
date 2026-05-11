/**
 * App.test.js — модульный тест Jest + Testing Library.
 * Сейчас ожидается текст «learn react», которого в вашем кастомном UI уже нет — тест будет падать до обновления.
 */
// render монтирует компонент в виртуальный DOM; screen даёт запросы к результату
import { render, screen } from '@testing-library/react';
// Импортируем тестируемый корневой компонент
import App from './App';

// test(имя, fn) — регистрирует один тестовый кейс
test('renders learn react link', () => {
  // Монтируем <App /> (внутри отрисуется Layout и т.д.)
  render(<App />);
  // Ищем элемент по тексту; /learn react/i — регистронезависимое регулярное выражение
  const linkElement = screen.getByText(/learn react/i);
  // expect — ассерт из Jest; toBeInTheDocument — матчер из @testing-library/jest-dom
  expect(linkElement).toBeInTheDocument();
});
