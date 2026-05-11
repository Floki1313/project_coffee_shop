/**
 * reportWebVitals.js — обёртка над пакетом `web-vitals` из CRA.
 * Сюда можно передать функцию-логгер (например, отправку метрик на сервер аналитики).
 */

// onPerfEntry — необязательный аргумент: функция приёмник метрик; если не передан, ничего не подписываем
const reportWebVitals = onPerfEntry => {
  // Проверяем, что аргумент truthy И является функцией ( instanceof Function совместим со старыми средами)
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Динамический import() возвращает Promise; код сплитится в отдельный чанк — меньше начальный бандл
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // getCLS — Cumulative Layout Shift (стабильность вёрстки)
      getCLS(onPerfEntry);
      // getFID — First Input Delay (задержка первого ввода; в новых метриках заменяют на INP)
      getFID(onPerfEntry);
      // getFCP — First Contentful Paint (первое отображение контента)
      getFCP(onPerfEntry);
      // getLCP — Largest Contentful Paint (загрузка крупного контента)
      getLCP(onPerfEntry);
      // getTTFB — Time to First Byte (скорость ответа сервера)
      getTTFB(onPerfEntry);
    });
    // Ошибки import (сеть, нет модуля) здесь не обрабатываются — в продакшене можно добавить .catch()
  }
  // Если условие выше ложно, функция просто завершается без побочных эффектов
};

// Экспорт по умолчанию для import reportWebVitals from './reportWebVitals'
export default reportWebVitals;
