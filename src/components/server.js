const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const DB_FILE = 'database.xml';

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

    if (!fs.existsSync(DB_FILE)) {

        const initialXml = `<?xml version="1.0" encoding="UTF-8"?>\n<orders>\n${newOrder}</orders>`;
        fs.writeFileSync(DB_FILE, initialXml, 'utf8');
    } else {
     
        let fileContent = fs.readFileSync(DB_FILE, 'utf8');
        
       
        if (fileContent.includes('</orders>')) {
            fileContent = fileContent.replace('</orders>', `${newOrder}</orders>`);
        } else {
        
            fileContent = `<?xml version="1.0" encoding="UTF-8"?>\n<orders>\n${newOrder}</orders>`;
        }
        
        fs.writeFileSync(DB_FILE, fileContent, 'utf8');
    }

    console.log(`Получен заказ от: ${customer?.name || 'Аноним'}. Данные записаны в ${DB_FILE}`);
    res.send('Заказ успешно сохранен в XML-базу');
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Сервер базы данных запущен!`);
    console.log(`Адрес: http://localhost:${PORT}`);
    console.log(`Файл записи: ${DB_FILE}`);
});
