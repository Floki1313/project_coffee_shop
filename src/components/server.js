/**
 * server.js — отдельный backend на Node.js + Express 
 * Назначение: принять JSON заказа с фронтенда, дописать его в файл database.xml,
 * отдать файл по запросу. Запуск: обычно `node server.js` из папки с файлом или
 * через скрипт на хостинге (Render и т.д.). Порт берётся из process.env.PORT или 10000.
 *
 * Зависимости в package.json рядом с этим скриптом: express, cors, fs — встроенный.
 */

// require('express') загружает модуль Express из node_modules и возвращает функцию-конструктор приложения
const express = require('express');

// require('fs') — встроенный модуль Node.js для чтения/записи файлов на диске
const fs = require('fs');

// require('cors') — middleware: добавляет заголовки CORS
const cors = require('cors');

// require('path') — встроенный модуль для безопасного склеивания путей к файлам 
const path = require('path');

// Вызываем express() — создаём экземпляр приложения; на нём вешаем маршруты и listen
const app = express();

// app.use(cors()) — для ВСЕХ маршрутов разрешить кросс-доменные запросы с типичными настройками по умолчанию
app.use(cors());

// app.use(express.json()) — парсит тело запроса в объект req.body
app.use(express.json());

// Имя файла «базы» в текущей рабочей директории процесса 
const DB_FILE = 'database.xml';

// PORT: задаётся переменная окружения; иначе локально 10000
const PORT = process.env.PORT || 10000;

// Регистрируем обработчик HTTP POST на путь '/save-xml' — фронт шлёт сюда JSON заказа
app.post('/save-xml', (req, res) => {
    // Деструктуризация req.body: ожидаем три поля, как собирает Order.jsx в saveToDB
    const { customer, details, items } = req.body;

    // toLocaleString() даёт человекочитаемую метку времени в строке XML 
    const ts = new Date().toLocaleString();

    // Шаблонная строка (backticks) — многострочный XML; внутри ${} вставляются значения JS
    const newOrder = `
    <order timestamp="${ts}">
        <customer>
            <name>${customer?.name || 'Аноним'}</name>
            <email>${customer?.email || 'Не указан'}</email>
            <phone>${customer?.phone || 'Не указан'}</phone>
        </customer>
        <details>
            <address>${details?.address || 'Не указан'}</address>
            <payment>${details?.payment || 'Не указан'}</payment>
            <comment>${details?.comment || '-'}</comment>
        </details>
        <items>
            ${items.map(item => `
            <item>
                <name>${item.name || 'Без названия'}</name>
                <price>${item.price || '0'}</price>
            </item>`).join('')}
        </items>
    </order>\n`;
    // customer?.name — optional chaining: если customer undefined, не упасть, вернуть undefined, затем || подставит запасной текст
    // items.map(...) — для каждого товара строка <item>...</item>; join('') склеивает без разделителя между элементами

    // try/catch - любая ошибка пойдёт в catch
    try {
        // existsSync — true, если файл DB_FILE уже есть в файловой системе
        if (!fs.existsSync(DB_FILE)) {
            // Первая запись: объявление XML + корневой элемент <orders> + один заказ + закрытие корня
            const initialXml = `<?xml version="1.0" encoding="UTF-8"?>\n<orders>\n${newOrder}</orders>`;
            // writeFileSync — блокирующая запись; 'utf8' — кодировка текста
            fs.writeFileSync(DB_FILE, initialXml, 'utf8');
        } else {
            // readFileSync читает весь файл в строку UTF-8
            let fileContent = fs.readFileSync(DB_FILE, 'utf8');
            // Если в файле есть закрывающий тег корня — вставляем новый заказ перед ним 
            if (fileContent.includes('</orders>')) {
                // replace заменяет только первое вхождение '</orders>' на newOrder + '</orders>'
                fileContent = fileContent.replace('</orders>', `${newOrder}</orders>`);
            } else {
                // Если файл битый — перезаписываем валидную обёртку с одним заказом 
                fileContent = `<?xml version="1.0" encoding="UTF-8"?>\n<orders>\n${newOrder}</orders>`;
            }
            // Сохраняем изменённое содержимое обратно на диск
            fs.writeFileSync(DB_FILE, fileContent, 'utf8');
        }
        // Лог сервера — видно в консоли хостинга
        console.log(`Заказ от ${customer?.name || 'Аноним'} сохранен в XML.`);
        res.send('Заказ успешно сохранен');
    } catch (err) {
        // Лог ошибки для диагностики
        console.error("Ошибка записи файла:", err);
        // 500 — внутренняя ошибка сервера; клиенту короткое сообщение
        res.status(500).send('Ошибка на стороне сервера при записи XML');
    }
});

// GET /download-xml — скачивание накопленного XML 
app.get('/download-xml', (req, res) => {
    // path.join склеивает каталог текущего модуля __dirname и имя файла — кроссплатформенный путь
    const filePath = path.join(__dirname, DB_FILE);

    // Проверяем существование файла по полному пути
    if (fs.existsSync(filePath)) {
        // res.download: выставляет заголовки вложения и отправляет файл; второй аргумент — имя при скачивании
        res.download(filePath, 'orders_database.xml');
    } else {
        // 404 — ресурс не найден; текст подсказывает пользователю, что делать
        res.status(404).send("Файл базы данных еще не создан. Отправьте заказ с сайта!");
    }
});

// GET / — простейший health-check: браузер покажут, что сервер жив
app.get('/', (req, res) => {
    // Текстовый ответ без HTML
    res.send('Сервер базы данных работает. Путь для сохранения: /save-xml, путь для скачивания: /download-xml');
});

// Запуск прослушивания TCP
app.listen(PORT, '0.0.0.0', () => {
    // Колбэк вызывается один раз после успешного bind к порту
    console.log(`Сервер запущен на порту ${PORT}`);
});
