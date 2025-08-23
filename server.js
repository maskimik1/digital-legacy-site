const express = require('express');
const crypto = require('crypto-js');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.static('public')); // Папка public для frontend (index.html, style.css, script.js)

const SECRET = 'your-secret-key'; // Замени на сгенерированный: node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
const USERS_FILE = path.join(__dirname, 'users.json');

// Загрузка пользователей из файла (если нет — создаём пустой)
let users = [];
if (fs.existsSync(USERS_FILE)) {
  users = JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'));
}

// Регистрация
app.post('/api/register', (req, res) => {
  const { email, password } = req.body;
  const hashed = crypto.SHA256(password).toString();
  if (users.find(u => u.email === email)) {
    return res.status(400).json({ message: 'Email занят' });
  }
  users.push({ email, password: hashed, encryptedLegacy: null });
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
  res.json({ message: 'Зарегистрировано!' });
});

// Логин
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const hashed = crypto.SHA256(password).toString();
  const user = users.find(u => u.email === email && u.password === hashed);
  if (user) {
    const token = jwt.sign({ email }, SECRET);
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
    req.userEmail = decoded.email;
    next();
  } catch (e) {
    res.status(401).json({ message: 'Не авторизовано' });
  }
};

// Сохранение
app.post('/api/save', auth, (req, res) => {
  const { encrypted } = req.body;
  const user = users.find(u => u.email === req.userEmail);
  user.encryptedLegacy = encrypted;
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
  res.json({ message: 'Сохранено!' });
});

// Загрузка
app.get('/api/load', auth, (req, res) => {
  const user = users.find(u => u.email === req.userEmail);
  res.json({ encrypted: user.encryptedLegacy });
});

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));

app.listen(3000, () => console.log('Сервер на http://localhost:3000'));
