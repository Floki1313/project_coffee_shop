const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

const DB_FILE = 'database.xml';

const PORT = process.env.PORT || 10000; 


app.post('/save-xml', (req, res) => {
    const { customer, details, items } = req.body;
    
   
    const newOrder = `
    <order timestamp="${new Date().toLocaleString()}">
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

    try {
        if (!fs.existsSync(DB_FILE)) {
            const initialXml = `<?xml version="1.0" encoding="UTF-8"?>\n<orders>\n${newOrder}</orders>`;
            fs.writeFileSync(DB_FILE, initialXml, 'utf8');
        } else {
            let fileContent = fs.readFileSync(DB_FILE, 'utf8');
            // Вставляем новый заказ перед закрывающим тегом </orders>
            if (fileContent.includes('</orders>')) {
                fileContent = fileContent.replace('</orders>', `${newOrder}</orders>`);
            } else {
                fileContent = `<?xml version="1.0" encoding="UTF-8"?>\n<orders>\n${newOrder}</orders>`;
            }
            fs.writeFileSync(DB_FILE, fileContent, 'utf8');
        }
        console.log(`Заказ от ${customer?.name || 'Аноним'} сохранен в XML.`);
        res.send('Заказ успешно сохранен');
    } catch (err) {
        console.error("Ошибка записи файла:", err);
        res.status(500).send('Ошибка на стороне сервера при записи XML');
    }
});

app.get('/download-xml', (req, res) => {
    const filePath = path.join(__dirname, DB_FILE);

    if (fs.existsSync(filePath)) {
        res.download(filePath, 'orders_database.xml'); 
    } else {
        res.status(404).send("Файл базы данных еще не создан. Отправьте заказ с сайта!");
    }
});

app.get('/', (req, res) => {
    res.send('Сервер базы данных работает. Путь для сохранения: /save-xml, путь для скачивания: /download-xml');
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
