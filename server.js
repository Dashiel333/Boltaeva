const express = require(`express`);
const app = express();
const path = require(`path`);

app.use(express.json()); // так сервер будет понимать json которій отправила из формы

app.use(express.static(path.join(__dirname, `public`))); //так подключается папка со статистикой HTML,CSS.js

// Обработка отправки формы с админки
app.post(`/add-post`, (req, res) => {
    const { title, content } = req.body;
    console.log(`Пост получен`, title, content);
    res.status(200).send({ message: `Пост сохранен` });
});

// Запуск сервера
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен: http://localhost:${PORT}`); 
});