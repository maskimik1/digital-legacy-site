const express = require('express');
const mongoose = require('mongoose');
const crypto = require('crypto-js'); // Уже есть
const jwt = require('jsonwebtoken'); // npm install jsonwebtoken
const nodemailer = require('nodemailer'); // Для будущей отправки
const app = express();
app.use(express.json());

const SECRET = 'your-secret-key'; // Замени

mongoose.connect('mongodb+srv://your-mongo-url', { useNewUrlParser: true });

const User = mongoose.model('User', { email: String, password: String, encryptedLegacy: String });

// Регистрация
app.post('/register', async (req, res) => {
    const { email, password } = req.body;
    const hashed = crypto.SHA256(password).toString();
    const user = new User({ email, password: hashed });
    await user.save();
    res.json({ message: 'Зарегистрировано!' });
});

// Логин
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const hashed = crypto.SHA256(password).toString();
    const user = await User.findOne({ email, password: hashed });
    if (user) {
        const token = jwt.sign({ id: user._id }, SECRET);
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Ошибка' });
    }
});

// Middleware для auth
const auth = (req, res, next) => {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, SECRET);
        req.userId = decoded.id;
        next();
    } catch (e) {
        res.status(401).json({ message: 'Не авторизовано' });
    }
};

// Сохранение
app.post('/save', auth, async (req, res) => {
    const { encrypted } = req.body;
    await User.updateOne({ _id: req.userId }, { encryptedLegacy: encrypted });
    res.json({ message: 'Сохранено!' });
});

// Загрузка
app.get('/load', auth, async (req, res) => {
    const user = await User.findById(req.userId);
    res.json({ encrypted: user.encryptedLegacy });
});

// Позже добавь /send для реальной email-отправки с nodemailer

app.listen(3000, () => console.log('Сервер на 3000'));
