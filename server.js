const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const CryptoJS = require('crypto-js');

const app = express();
const PORT = process.env.PORT || 3000;

const SECRET_KEY = process.env.SECRET_KEY || 'superSecret123!@#qweRty4567890abcDef';

// Настройка для обслуживания статических файлов
app.use(express.static(path.join(__dirname, 'public')));

// Инициализация базы данных
const dataDir = './data';
const usersFile = path.join(dataDir, 'users.json');

// Создаем директорию, если не существует
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

// Загрузка пользователей из файла
let users = {};
try {
    if (fs.existsSync(usersFile)) {
        const data = fs.readFileSync(usersFile, 'utf8');
        users = JSON.parse(data);
        console.log('База пользователей загружена');
    } else {
        fs.writeFileSync(usersFile, JSON.stringify({}, null, 2));
        console.log('Создана новая база пользователей');
    }
} catch (err) {
    console.error('Ошибка загрузки базы данных:', err);
    users = {};
}

const codes = {};
const claims = {};

app.use(bodyParser.json());
app.use(cors());

// Функция для сохранения пользователей
function saveUsers() {
    try {
        fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
        return true;
    } catch (err) {
        console.error('Ошибка сохранения базы данных:', err);
        return false;
    }
}

// Nodemailer setup - используем переменные окружения
const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER || 'legacynetalert@gmail.com',
        pass: process.env.EMAIL_PASS || 'dmtmalsialvlwvhg'
    }
});

// Функция для отправки email с кодом
async function sendEmailCode(email, code, type) {
    try {
        let subject, text;
        
        switch (type) {
            case 'register':
                subject = 'Код подтверждения регистрации LegacyNet';
                text = `Ваш код подтверждения для регистрации в LegacyNet: ${code}\nКод действителен в течение 5 минут.`;
                break;
            case 'login':
                subject = 'Код входа в LegacyNet';
                text = `Ваш код для входа в LegacyNet: ${code}\nКод действителен в течение 5 минут.`;
                break;
            case 'reset':
                subject = 'Код восстановления пароля LegacyNet';
                text = `Ваш код для восстановления пароля в LegacyNet: ${code}\nКод действителен в течение 5 минут.`;
                break;
            default:
                subject = 'Код подтверждения LegacyNet';
                text = `Ваш код подтверждения: ${code}\nКод действителен в течение 5 минут.`;
        }

        const mailOptions = {
            from: 'LegacyNet <legacynetalert@gmail.com>',
            to: email,
            subject: subject,
            text: text,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #4CAF50;">LegacyNet</h2>
                    <p>Ваш код подтверждения:</p>
                    <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; text-align: center; font-size: 24px; font-weight: bold; color: #333; margin: 20px 0;">
                        ${code}
                    </div>
                    <p>Код действителен в течение 5 минут.</p>
                    <p style="color: #666; font-size: 12px;">Если вы не запрашивали этот код, проигнорируйте это письмо.</p>
                </div>
            `
        };

        const result = await transporter.sendMail(mailOptions);
        console.log(`Email отправлен на ${email}:`, result.messageId);
        return true;
    } catch (error) {
        console.error('Ошибка отправки email:', error);
        return false;
    }
}

// Функция для отправки завещания на почту контактам
async function sendLegacyEmail(contactEmail, claimCode, userName) {
    try {
        const mailOptions = {
            from: 'LegacyNet <legacynetalert@gmail.com>',
            to: contactEmail,
            subject: 'Цифровое завещание от ' + userName,
            text: `Вы были указаны как контакт для получения цифрового завещания.\n\nКод для получения завещания: ${claimCode}\n\nДля получения завещания перейдите на сайт LegacyNet и используйте этот код вместе с email отправителя.`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #4CAF50;">LegacyNet - Цифровое завещание</h2>
                    <p>Вы были указаны как контакт для получения цифрового завещания от <strong>${userName}</strong>.</p>
                    <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
                        <p style="margin: 0;"><strong>Код для получения завещания:</strong></p>
                        <div style="text-align: center; font-size: 24px; font-weight: bold; color: #333; margin: 10px 0;">
                            ${claimCode}
                        </div>
                    </div>
                    <p>Для получения завещания перейдите на сайт LegacyNet и используйте этот код вместе с email отправителя.</p>
                    <p style="color: #666; font-size: 12px;">Это автоматическое сообщение, пожалуйста, не отвечайте на него.</p>
                </div>
            `
        };

        const result = await transporter.sendMail(mailOptions);
        console.log(`Завещание отправлено на ${contactEmail}:`, result.messageId);
        return true;
    } catch (error) {
        console.error('Ошибка отправки завещания:', error);
        return false;
    }
}

// Регистрация
app.post('/api/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        if (!email || !password) {
            return res.status(400).json({ success: false, message: 'Email и пароль обязательны' });
        }

        if (users[email]) {
            return res.status(400).json({ success: false, message: 'Email уже зарегистрирован' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        users[email] = { 
            password: hashedPassword, 
            encrypted: '', 
            contacts: [], 
            registrationDate: new Date().toISOString(), 
            lastLogin: new Date().toISOString(), 
            subscription: 'free',
            twoFactorEnabled: true
        };

        if (!saveUsers()) {
            return res.status(500).json({ success: false, message: 'Ошибка сохранения данных' });
        }

        // Генерация и отправка кода
        const code = Math.floor(100000 + Math.random() * 900000).toString();
        codes[email] = { code, expires: Date.now() + 300000, type: 'register' };

        console.log(`Код подтверждения для ${email}: ${code}`);

        // Отправка email
        const emailSent = await sendEmailCode(email, code, 'register');
        
        if (!emailSent) {
            console.warn(`Не удалось отправить email на ${email}, но регистрация продолжается`);
        }

        const tempToken = jwt.sign({ email }, SECRET_KEY, { expiresIn: '5m' });
        res.json({ 
            success: true, 
            temp_token: tempToken,
            message: emailSent ? 'Код отправлен на вашу почту' : 'Код сгенерирован (проверьте консоль сервера)'
        });
    } catch (error) {
        console.error('Ошибка регистрации:', error);
        res.status(500).json({ success: false, message: 'Внутренняя ошибка сервера' });
    }
});

// Логин
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        if (!email || !password) {
            return res.status(400).json({ success: false, message: 'Email и пароль обязательны' });
        }

        const user = users[email];
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ success: false, message: 'Неверный email или пароль' });
        }

        user.lastLogin = new Date().toISOString();
        saveUsers();

        // Генерация и отправка кода
        const code = Math.floor(100000 + Math.random() * 900000).toString();
        codes[email] = { code, expires: Date.now() + 300000, type: 'login' };

        console.log(`Код входа для ${email}: ${code}`);

        // Отправка email
        const emailSent = await sendEmailCode(email, code, 'login');
        
        if (!emailSent) {
            console.warn(`Не удалось отправить email на ${email}, но вход продолжается`);
        }

        const tempToken = jwt.sign({ email }, SECRET_KEY, { expiresIn: '5m' });
        res.json({ 
            success: true, 
            temp_token: tempToken,
            message: emailSent ? 'Код отправлен на вашу почту' : 'Код сгенерирован (проверьте консоль сервера)'
        });
    } catch (error) {
        console.error('Ошибка входа:', error);
        res.status(500).json({ success: false, message: 'Внутренняя ошибка сервера' });
    }
});

// Подтверждение 2FA
app.post('/api/verify_2fa', (req, res) => {
    try {
        const { temp_token, code } = req.body;
        
        if (!temp_token || !code) {
            return res.status(400).json({ success: false, message: 'Токен и код обязательны' });
        }

        const decoded = jwt.verify(temp_token, SECRET_KEY);
        const storedCode = codes[decoded.email];
        
        if (!storedCode || storedCode.expires < Date.now() || storedCode.code !== code) {
            return res.status(401).json({ success: false, message: 'Неверный или истекший код' });
        }

        delete codes[decoded.email];

        // Увеличиваем срок действия токена до 30 дней
        const token = jwt.sign({ email: decoded.email }, SECRET_KEY, { expiresIn: '30d' });
        res.json({ success: true, token });
    } catch (err) {
        console.error('Ошибка верификации 2FA:', err);
        res.status(401).json({ success: false, message: 'Ошибка верификации' });
    }
});

// Получение профиля
app.get('/api/profile', verifyToken, (req, res) => {
    try {
        const user = users[req.user.email];
        if (!user) {
            return res.status(404).json({ success: false, message: 'Пользователь не найден' });
        }
        
        res.json({
            success: true,
            registrationDate: user.registrationDate,
            lastLogin: user.lastLogin,
            subscription: user.subscription || 'free',
            twoFactorEnabled: user.twoFactorEnabled !== undefined ? user.twoFactorEnabled : true
        });
    } catch (error) {
        console.error('Ошибка получения профиля:', error);
        res.status(500).json({ success: false, message: 'Ошибка загрузки профиля' });
    }
});

// Установка контактов
app.post('/api/set_contacts', verifyToken, (req, res) => {
    try {
        const { contacts } = req.body;
        
        if (!users[req.user.email]) {
            return res.status(404).json({ success: false, message: 'Пользователь не найден' });
        }
        
        // Фильтруем пустые и невалидные email
        const validContacts = contacts
            .filter(c => c && c.trim() !== '')
            .map(c => c.trim())
            .filter(c => c.includes('@'));
        
        users[req.user.email].contacts = validContacts;
        
        if (!saveUsers()) {
            return res.status(500).json({ success: false, message: 'Ошибка сохранения контактов' });
        }
        
        res.json({ success: true, message: 'Контакты сохранены' });
    } catch (error) {
        console.error('Ошибка сохранения контактов:', error);
        res.status(500).json({ success: false, message: 'Ошибка сохранения контактов' });
    }
});

// Получение контактов
app.get('/api/get_contacts', verifyToken, (req, res) => {
    try {
        const user = users[req.user.email];
        if (!user) {
            return res.status(404).json({ success: false, contacts: [] });
        }
        res.json({ success: true, contacts: user.contacts || [] });
    } catch (error) {
        console.error('Ошибка получения контактов:', error);
        res.status(500).json({ success: false, contacts: [] });
    }
});

// Восстановление пароля - отправка кода
app.post('/api/forgot_password', async (req, res) => {
    try {
        const { email } = req.body;
        
        if (!email) {
            return res.status(400).json({ success: false, message: 'Email обязателен' });
        }

        if (!users[email]) {
            return res.status(404).json({ success: false, message: 'Email не найден' });
        }

        const code = Math.floor(100000 + Math.random() * 900000).toString();
        codes[email] = { code, expires: Date.now() + 300000, type: 'reset' };

        console.log(`Код восстановления для ${email}: ${code}`);

        // Отправка email
        const emailSent = await sendEmailCode(email, code, 'reset');
        
        if (!emailSent) {
            console.warn(`Не удалось отправить email на ${email}, но процесс восстановления продолжается`);
        }

        const tempToken = jwt.sign({ email }, SECRET_KEY, { expiresIn: '5m' });
        res.json({ 
            success: true, 
            temp_token: tempToken,
            message: emailSent ? 'Код отправлен на вашу почту' : 'Код сгенерирован (проверьте консоль сервера)'
        });
    } catch (error) {
        console.error('Ошибка восстановления пароля:', error);
        res.status(500).json({ success: false, message: 'Ошибка восстановления пароля' });
    }
});

// Смена пароля
app.post('/api/reset_password', async (req, res) => {
    try {
        const { temp_token, code, newPassword } = req.body;
        
        if (!temp_token || !code || !newPassword) {
            return res.status(400).json({ success: false, message: 'Все поля обязательны' });
        }

        const decoded = jwt.verify(temp_token, SECRET_KEY);
        const storedCode = codes[decoded.email];
        
        if (!storedCode || storedCode.expires < Date.now() || storedCode.code !== code) {
            return res.status(401).json({ success: false, message: 'Неверный или истекший код' });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        users[decoded.email].password = hashedPassword;
        
        delete codes[decoded.email];
        
        if (!saveUsers()) {
            return res.status(500).json({ success: false, message: 'Ошибка сохранения пароля' });
        }
        
        res.json({ success: true, message: 'Пароль успешно изменен' });
    } catch (err) {
        console.error('Ошибка смены пароля:', err);
        res.status(401).json({ success: false, message: 'Ошибка смены пароля' });
    }
});

// Сохранение завещания
app.post('/api/save', verifyToken, (req, res) => {
    try {
        const { encrypted } = req.body;
        
        if (!users[req.user.email]) {
            return res.status(404).json({ success: false, message: 'Пользователь не найден' });
        }
        
        users[req.user.email].encrypted = encrypted;
        
        if (!saveUsers()) {
            return res.status(500).json({ success: false, message: 'Ошибка сохранения завещания' });
        }
        
        res.json({ success: true, message: 'Завещание сохранено' });
    } catch (error) {
        console.error('Ошибка сохранения завещания:', error);
        res.status(500).json({ success: false, message: 'Ошибка сохранения завещания' });
    }
});

// Загрузка завещания
app.post('/api/load', verifyToken, (req, res) => {
    try {
        const user = users[req.user.email];
        if (!user) {
            return res.status(404).json({ success: false, message: 'Пользователь не найден' });
        }
        
        if (!user.encrypted) {
            return res.json({ success: true, encrypted: null, message: 'Нет сохраненного завещания' });
        }
        
        res.json({ success: true, encrypted: user.encrypted });
    } catch (error) {
        console.error('Ошибка загрузки завещания:', error);
        res.status(500).json({ success: false, message: 'Ошибка загрузки завещания' });
    }
});

// Отправка завещания контактам
app.post('/api/send_legacy', verifyToken, async (req, res) => {
    try {
        const { encryptionMethod, masterPassword } = req.body;
        const user = users[req.user.email];
        
        if (!user) {
            return res.status(404).json({ success: false, message: 'Пользователь не найден' });
        }

        if (!user.contacts || user.contacts.length === 0) {
            return res.status(400).json({ success: false, message: 'Добавьте контакты для отправки' });
        }

        if (!user.encrypted) {
            return res.status(400).json({ success: false, message: 'Сначала сохраните завещание' });
        }

        // Проверка метода шифрования
        if (encryptionMethod === 'master_password' && !masterPassword) {
            return res.status(400).json({ success: false, message: 'Мастер-пароль обязателен для выбранного метода' });
        }

        // Генерация кода претензии
        const claimCode = crypto.randomBytes(8).toString('hex');
        claims[req.user.email] = {
            claimCode,
            encrypted: user.encrypted,
            expires: Date.now() + 365 * 24 * 60 * 60 * 1000 // 1 год
        };

        // Отправка email контактам
        let emailsSent = 0;
        const userName = req.user.email.split('@')[0];
        
        for (const contact of user.contacts) {
            const emailSent = await sendLegacyEmail(contact, claimCode, userName);
            if (emailSent) {
                emailsSent++;
                console.log(`Завещание отправлено на ${contact} (код претензии: ${claimCode})`);
            } else {
                console.error(`Не удалось отправить завещание на ${contact}`);
            }
        }

        res.json({ 
            success: true, 
            message: `Завещание отправлено ${emailsSent} из ${user.contacts.length} контактам`,
            encryptionMethod: encryptionMethod,
            claimCode: claimCode
        });
    } catch (error) {
        console.error('Ошибка отправки завещания:', error);
        res.status(500).json({ success: false, message: 'Ошибка отправки завещания' });
    }
});

// Претензия на завещание
app.post('/api/claim_legacy', (req, res) => {
    try {
        const { email, claimCode } = req.body;
        
        if (!email || !claimCode) {
            return res.status(400).json({ success: false, message: 'Email и код обязательны' });
        }

        const claim = claims[email];
        if (!claim || claim.claimCode !== claimCode || claim.expires < Date.now()) {
            return res.status(401).json({ success: false, message: 'Неверный код или срок действия истек' });
        }

        res.json({ success: true, encrypted: claim.encrypted });
    } catch (error) {
        console.error('Ошибка претензии на завещание:', error);
        res.status(500).json({ success: false, message: 'Ошибка получения завещания' });
    }
});

// Подписка
app.post('/api/subscribe', verifyToken, (req, res) => {
    try {
        const { plan } = req.body;
        
        if (!users[req.user.email]) {
            return res.status(404).json({ success: false, message: 'Пользователь не найден' });
        }
        
        users[req.user.email].subscription = plan;
        
        if (!saveUsers()) {
            return res.status(500).json({ success: false, message: 'Ошибка сохранения подписки' });
        }
        
        res.json({ success: true, message: 'Подписка активирована' });
    } catch (error) {
        console.error('Ошибка подписки:', error);
        res.status(500).json({ success: false, message: 'Ошибка подписки' });
    }
});

// Middleware для проверки токена
function verifyToken(req, res, next) {
    const token = req.headers.authorization;
    
    if (!token) {
        return res.status(401).json({ success: false, message: 'Токен отсутствует' });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;
        next();
    } catch (err) {
        console.error('Ошибка верификации токена:', err);
        return res.status(401).json({ success: false, message: 'Неверный токен' });
    }
}

// Добавляем обработчик для всех остальных маршрутов (для SPA)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Старт сервера
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Сервер запущен на порту ${PORT}`);
    console.log(`API доступен по адресу: http://localhost:${PORT}/api`);
});
