// Простая "аутентификация" через localStorage (для MVP, позже заменить на реальный backend)
function register() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (email && password) {
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', CryptoJS.SHA256(password).toString()); // Хэш пароля
        document.getElementById('auth-message').textContent = 'Регистрация успешна! Теперь войдите.';
    } else {
        alert('Заполните поля!');
    }
}

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (email === storedEmail && CryptoJS.SHA256(password).toString() === storedPassword) {
        document.getElementById('auth-section').style.display = 'none';
        document.getElementById('legacy-section').style.display = 'block';
        loadLegacy(); // Загрузить сохранённые данные, если есть
    } else {
        alert('Неверный email или пароль!');
    }
}

function logout() {
    document.getElementById('auth-section').style.display = 'block';
    document.getElementById('legacy-section').style.display = 'none';
}

// Сохранение завещания с шифрованием
function saveLegacy() {
    const instructions = document.getElementById('instructions').value;
    const credentials = document.getElementById('credentials').value;
    const messages = document.getElementById('messages').value;
    const masterPassword = document.getElementById('master-password').value;

    if (!masterPassword) {
        alert('Укажите мастер-пароль!');
        return;
    }

    const data = {
        instructions,
        credentials,
        messages
    };

    // Шифруем данные
    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), masterPassword).toString();
    localStorage.setItem('encryptedLegacy', encryptedData);

    document.getElementById('saved-legacy').innerHTML = '<p>Завещание сохранено и зашифровано! Чтобы просмотреть, используйте мастер-пароль.</p>';
}

// Загрузка и дешифровка (для preview)
function loadLegacy() {
    const encrypted = localStorage.getItem('encryptedLegacy');
    if (encrypted) {
        const masterPassword = prompt('Введите мастер-пароль для просмотра:');
        if (masterPassword) {
            try {
                const decrypted = CryptoJS.AES.decrypt(encrypted, masterPassword).toString(CryptoJS.enc.Utf8);
                const data = JSON.parse(decrypted);
                document.getElementById('instructions').value = data.instructions;
                document.getElementById('credentials').value = data.credentials;
                document.getElementById('messages').value = data.messages;
                document.getElementById('saved-legacy').innerHTML = '<p>Данные загружены.</p>';
            } catch (e) {
                alert('Неверный пароль или данные повреждены!');
            }
        }
    }
}

// Скачивание как JSON-файла
function downloadLegacy() {
    const encrypted = localStorage.getItem('encryptedLegacy');
    if (encrypted) {
        const blob = new Blob([encrypted], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'legacy.txt';
        a.click();
    } else {
        alert('Сначала сохраните завещание!');
    }
}
