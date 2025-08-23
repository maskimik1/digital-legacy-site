const API_URL = 'http://localhost:3000/api'; // Замени на твой сервер позже

// Регистрация/логин (теперь с backend)
async function register() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (email && password) {
        const res = await fetch(`${API_URL}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const data = await res.json();
        document.getElementById('auth-message').textContent = data.message;
    }
}

async function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const res = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (data.token) {
        localStorage.setItem('token', data.token);
        document.getElementById('auth-section').style.display = 'none';
        document.getElementById('legacy-section').style.display = 'block';
        loadLegacy();
    } else {
        alert('Ошибка входа!');
    }
}

function logout() {
    localStorage.removeItem('token');
    document.getElementById('auth-section').style.display = 'block';
    document.getElementById('legacy-section').style.display = 'none';
}

// Шаблоны
function loadTemplate(type) {
    if (type === 'instructions') {
        document.getElementById('instructions').value = 'После моей смерти: Удалить аккаунты в VK и Telegram. Передать крипто-кошельки [имя].';
    } else if (type === 'messages') {
        document.getElementById('messages').value = 'Дорогие близкие, я люблю вас. Вот мои последние слова...';
    }
}

// Сохранение (отправка на backend)
async function saveLegacy() {
    const data = {
        instructions: document.getElementById('instructions').value,
        credentials: document.getElementById('credentials').value,
        messages: document.getElementById('messages').value,
        contacts: [document.getElementById('contact1').value, document.getElementById('contact2').value].filter(Boolean),
        masterPassword: document.getElementById('master-password').value
    };

    if (!data.masterPassword) return alert('Мастер-пароль обязателен!');

    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), data.masterPassword).toString();

    const res = await fetch(`${API_URL}/save`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') },
        body: JSON.stringify({ encrypted })
    });
    const result = await res.json();
    document.getElementById('saved-legacy').innerHTML = `<p>${result.message}</p>`;
}

// Загрузка
async function loadLegacy() {
    const res = await fetch(`${API_URL}/load`, {
        headers: { 'Authorization': localStorage.getItem('token') }
    });
    const { encrypted } = await res.json();
    if (encrypted) {
        const masterPassword = prompt('Мастер-пароль:');
        try {
            const decrypted = JSON.parse(CryptoJS.AES.decrypt(encrypted, masterPassword).toString(CryptoJS.enc.Utf8));
            document.getElementById('instructions').value = decrypted.instructions;
            // ... заполни другие поля
            document.getElementById('saved-legacy').innerHTML = '<p>Загружено.</p>';
        } catch (e) {
            alert('Ошибка дешифровки!');
        }
    }
}

// Скачивание
function downloadLegacy() {
    // Аналогично старому, но с backend если нужно
}

// Симуляция отправки (mailto для MVP)
function sendLegacy() {
    const contacts = [document.getElementById('contact1').value, document.getElementById('contact2').value].filter(Boolean);
    if (contacts.length) {
        const subject = 'Ваше цифровое завещание';
        const body = 'Прикрепите зашифрованный файл вручную.';
        window.location.href = `mailto:${contacts.join(',')}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    } else {
        alert('Добавьте контакты!');
    }
}
