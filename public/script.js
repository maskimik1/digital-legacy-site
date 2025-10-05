const API_URL = window.location.origin + '/api';
console.log('API URL:', API_URL);

const translations = {
    ru: {
        logo: 'LegacyNet',
        registration: 'Регистрация',
        login: 'Вход',
        hero_title: 'Защитите своё цифровое наследие с LegacyNet',
        hero_description: 'В эпоху цифровизации ваши аккаунты, фото, крипта и сообщения — это часть вас. LegacyNet помогает создать "цифровое завещание": инструкции, пароли и сообщения для близких. Безопасно, просто, с шифрованием и удобством.',
        start_free: 'Начать бесплатно',
        why_legacy_net: 'Почему LegacyNet?',
        secure_encryption: 'Безопасное шифрование',
        secure_encryption_desc: 'Все данные зашифрованы end-to-end, как в банковских системах. Мастер-пароль только у вас.',
        ai_generation: 'Автоматический бэкап',
        ai_generation_desc: 'Ваши данные надежно сохраняются с автоматическим резервным копированием.',
        sharing_with_family: 'Шаринг с близкими',
        sharing_with_family_desc: 'Назначьте контакты для автоматической отправки вашего цифрового наследия.',
        export_backup: 'Экспорт и бэкап',
        export_backup_desc: 'Скачайте завещание в файл или экспортируйте в PDF для нотариуса.',
        personal_profile: 'Личный профиль',
        information_security: 'Информация и безопасность',
        email: 'Email',
        email_loading: 'Email: Загрузка...',
        legacy_status: 'Статус завещания',
        statistics: 'Статистика',
        accounts_protected: 'Защищено аккаунтов',
        wallets_specified: 'Указано кошельков',
        registration_date: 'Дата регистрации',
        last_login: 'Последний вход',
        current_plan: 'Текущий тарифный план:',
        two_factor_auth: 'Двухфакторная авторизация',
        create_master_password: 'Создать мастер-пароль',
        change_master_password: 'Сменить мастер-пароль',
        legacy_management: 'Управление завещанием',
        last_updated: 'Последнее обновление',
        history_no_records: 'История действий: Нет записей.',
        registration_date_loading: 'Дата регистрации: Загрузка...',
        last_login_loading: 'Последний вход: Загрузка...',
        settings: 'Настройки',
        legacy: 'Завещание',
        go_to_legacy: 'Перейти к завещание',
        load_legacy: 'Загрузить завещание',
        logout: 'Выход',
        support: 'Поддержка',
        theme: 'Тема',
        language: 'Язык',
        notifications: 'Уведомления',
        receive_email_notifications: 'Получать уведомления на email',
        save: 'Сохранить',
        back: 'Назад',
        compose_legacy: 'Составьте завещание',
        social_networks: 'Соцсети',
        crypto: 'Крипто',
        passwords: 'Пароли',
        messages: 'Сообщения',
        add_account: 'Добавить аккаунт',
        add_wallet: 'Добавить кошелёк',
        passwords_logins: 'Пароли и логины',
        credentials_placeholder: 'Пароли, логины, инструкции...',
        messages_for_family: 'Сообщения для близких',
        messages_placeholder: 'Сообщения...',
        generate_ai: 'Генерировать AI',
        master_password: 'Мастер-пароль:',
        send_to_contacts: 'Отправить контактам',
        download: 'Скачать',
        back_to_profile: 'Назад в профиль',
        copyright: '© 2025 LegacyNet. Все права защищены.',
        privacy_policy: 'Политика конфиденциальности',
        terms_of_use: 'Условия использования',
        auth_title: 'Регистрация / Вход',
        password: 'Пароль',
        confirm_password: 'Подтвердите пароль',
        confirm: 'Подтвердить',
        profile: 'Профиль',
        fill_fields: 'Заполните поля!',
        passwords_mismatch: 'Пароли не совпадают!',
        password_short: 'Пароль слишком короткий! Минимум 8 символов.',
        error: 'Ошибка!',
        master_password_required: 'Мастер-пароль обязателен!',
        master_password_prompt: 'Мастер-пароль:',
        loaded: 'Загружено.',
        add_contacts: 'Добавьте контакты!',
        theme_dark: 'Тёмная',
        theme_light: 'Светлая',
        lang_ru: 'Русский',
        lang_en: 'English',
        history_sample: 'История действий: Зарегистрирован 26.08.2025, завещание сохранено 1 раз.',
        registration_date_sample: 'Дата регистрации: 26.08.2025',
        last_login_sample: 'Последний вход: 27.08.2025',
        menu: 'Меню',
        delete: 'Удалить',
        enter_code: 'Введите 6-значный код',
        code_sent: 'Код отправлен на вашу почту.',
        forgot_password: 'Забыли пароль?',
        reset_password: 'Восстановление пароля',
        send_code: 'Отправить код',
        new_password: 'Новый пароль',
        confirm_new_password: 'Подтвердите новый пароль',
        reset: 'Сменить пароль',
        contacts: 'Контакты',
        add_contact: 'Добавить',
        remove: 'Удалить',
        code: 'Код',
        claim_legacy: 'Претензия на завещание',
        claim_code: 'Код претензии',
        get: 'Получить',
        warning: 'Предупреждение: Поделитесь мастер-паролем с контактами оффлайн (например, в завещании или у нотариуса). Не отправляйте его по email!',
        premium: 'Премиум',
        premium_title: 'Подписка Premium LegacyNet',
        premium_description: 'Получите расширенные возможности для вашего цифрового наследия. Выберите план, подходящий вам.',
        free_plan: 'Free',
        premium_monthly: 'Ежемесячно',
        premium_yearly: 'Ежегодно',
        subscribe: 'Подписаться',
        subscription_loading: 'Подписка: Загрузка...',
        current_password: 'Текущий пароль',
        change_password_button: 'Сменить пароль',
        password_changed_success: 'Пароль успешно изменен!',
        password_change_error: 'Ошибка при смене пароля',
        passwords_do_not_match: 'Пароли не совпадают',
        legacy_active: 'Активно и сохранено',
        legacy_not_created: 'Не создано',
        status_error: 'Ошибка проверки статуса',
        no_data: 'Нет данных',
        encryption_method: 'Метод шифрования'
    },
    en: {
        logo: 'LegacyNet',
        registration: 'Registration',
        login: 'Login',
        hero_title: 'Protect Your Digital Heritage with LegacyNet',
        hero_description: 'In the era of digitalization, your accounts, photos, crypto, and messages are part of you. LegacyNet helps create a "digital will": instructions, passwords, and messages for loved ones. Secure, simple, with encryption and convenience.',
        start_free: 'Start for Free',
        why_legacy_net: 'Why LegacyNet?',
        secure_encryption: 'Secure Encryption',
        secure_encryption_desc: 'All data is end-to-end encrypted, like in banking systems. Master password only with you.',
        ai_generation: 'Automatic Backup',
        ai_generation_desc: 'Your data is securely stored with automatic backup.',
        sharing_with_family: 'Sharing with Family',
        sharing_with_family_desc: 'Assign contacts for automatic sending of your digital heritage.',
        export_backup: 'Export and Backup',
        export_backup_desc: 'Download the will as a file or export to PDF for a notary.',
        personal_profile: 'Personal Profile',
        information_security: 'Information and Security',
        email: 'Email',
        email_loading: 'Email: Loading...',
        legacy_status: 'Will Status',
        statistics: 'Statistics',
        accounts_protected: 'Accounts protected',
        wallets_specified: 'Wallets specified',
        registration_date: 'Registration Date',
        last_login: 'Last Login',
        current_plan: 'Current Plan:',
        two_factor_auth: 'Two-factor authentication',
        create_master_password: 'Create master password',
        change_master_password: 'Change master password',
        legacy_management: 'Will Management',
        last_updated: 'Last updated',
        history_no_records: 'Activity History: No records.',
        registration_date_loading: 'Registration Date: Loading...',
        last_login_loading: 'Last Login: Loading...',
        settings: 'Settings',
        legacy: 'Will',
        go_to_legacy: 'Go to Will',
        load_legacy: 'Load Will',
        logout: 'Logout',
        support: 'Support',
        theme: 'Theme',
        language: 'Language',
        notifications: 'Notifications',
        receive_email_notifications: 'Receive notifications via email',
        save: 'Save',
        back: 'Back',
        compose_legacy: 'Compose Will',
        social_networks: 'Social Networks',
        crypto: 'Crypto',
        passwords: 'Passwords',
        messages: 'Messages',
        add_account: 'Add Account',
        add_wallet: 'Add Wallet',
        passwords_logins: 'Passwords and Logins',
        credentials_placeholder: 'Passwords, logins, instructions...',
        messages_for_family: 'Messages for Loved Ones',
        messages_placeholder: 'Messages...',
        generate_ai: 'Generate AI',
        master_password: 'Master Password:',
        send_to_contacts: 'Send to Contacts',
        download: 'Download',
        back_to_profile: 'Back to Profile',
        copyright: '© 2025 LegacyNet. All rights reserved.',
        privacy_policy: 'Privacy Policy',
        terms_of_use: 'Terms of Use',
        auth_title: 'Registration / Login',
        password: 'Password',
        confirm_password: 'Confirm Password',
        confirm: 'Confirm',
        profile: 'Profile',
        fill_fields: 'Fill in the fields!',
        passwords_mismatch: 'Passwords do not match!',
        password_short: 'Password is too short! Minimum 8 characters.',
        error: 'Error!',
        master_password_required: 'Master password is required!',
        master_password_prompt: 'Master Password:',
        loaded: 'Loaded.',
        add_contacts: 'Add contacts!',
        theme_dark: 'Dark',
        theme_light: 'Light',
        lang_ru: 'Russian',
        lang_en: 'English',
        history_sample: 'Activity History: Registered 08/26/2025, will saved 1 time.',
        registration_date_sample: 'Registration Date: 08/26/2025',
        last_login_sample: 'Last Login: 08/27/2025',
        menu: 'Menu',
        delete: 'Delete',
        enter_code: 'Enter 6-digit code',
        code_sent: 'Code sent to your email.',
        forgot_password: 'Forgot password?',
        reset_password: 'Password Recovery',
        send_code: 'Send Code',
        new_password: 'New Password',
        confirm_new_password: 'Confirm New Password',
        reset: 'Reset Password',
        contacts: 'Contacts',
        add_contact: 'Add',
        remove: 'Remove',
        code: 'Code',
        claim_legacy: 'Claim Legacy',
        claim_code: 'Claim Code',
        get: 'Get',
        warning: 'Warning: Share the master password with contacts offline (e.g., in a will or with a notary). Do not send it via email!',
        premium: 'Premium',
        premium_title: 'LegacyNet Premium Subscription',
        premium_description: 'Get advanced features for your digital heritage. Choose the plan that suits you.',
        free_plan: 'Free',
        premium_monthly: 'Monthly',
        premium_yearly: 'Yearly',
        subscribe: 'Subscribe',
        subscription_loading: 'Subscription: Loading...',
        current_password: 'Current password',
        change_password_button: 'Change password',
        password_changed_success: 'Password changed successfully!',
        password_change_error: 'Error changing password',
        passwords_do_not_match: 'Passwords do not match',
        legacy_active: 'Active and saved',
        legacy_not_created: 'Not created',
        status_error: 'Status check error',
        no_data: 'No data',
        encryption_method: 'Encryption Method'
    }
};

let isButtonDisabled = false;
let tempToken = '';
let selectedEncryptionMethod = 'shared_key';
let masterPasswordCreated = localStorage.getItem('masterPasswordCreated') === 'true';

function setLanguage(lang) {
    document.querySelectorAll('[data-lang]').forEach(el => {
        el.textContent = translations[lang][el.dataset.lang];
    });
    document.querySelectorAll('[data-placeholder]').forEach(el => {
        el.placeholder = translations[lang][el.dataset.placeholder];
    });
    
    const themeSelect = document.getElementById('theme-select');
    if (themeSelect) {
        themeSelect.options[0].text = translations[lang].theme_dark;
        themeSelect.options[1].text = translations[lang].theme_light;
    }
    
    const languageSelect = document.getElementById('language-select');
    if (languageSelect) {
        languageSelect.options[0].text = translations[lang].lang_ru;
        languageSelect.options[1].text = translations[lang].lang_en;
    }
    
    document.documentElement.lang = lang;
}

function applyTheme(theme) {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
}

function showSection(sectionId) {
    const sections = ['home', 'profile-section', 'settings-section', 'legacy-section', 'premium-section', 'support-section'];
    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = id === sectionId ? 'block' : 'none';
    });
    window.scrollTo(0, 0);
    
    localStorage.setItem('currentSection', sectionId);
    
    if (sectionId === 'premium-section') {
        setTimeout(initSwitcher, 0);
        resetPriceToMonthly();
    }
    
    if (sectionId === 'legacy-section') {
        setTimeout(setupEncryptionMethods, 100);
    }
    
    if (sectionId === 'support-section') {
        openSupportTab('new-request');
    }
    
    document.getElementById('user-submenu').style.display = 'none';
}

function resetPriceToMonthly() {
    const monthlySwitch = document.getElementById('monthly-switch');
    const yearlySwitch = document.getElementById('yearly-switch');
    const slider = document.querySelector('.switcher-slider');
    
    if (monthlySwitch && yearlySwitch && slider) {
        monthlySwitch.classList.add('active');
        yearlySwitch.classList.remove('active');
        slider.style.width = `${monthlySwitch.offsetWidth}px`;
        slider.style.left = `0px`;
        updatePriceDisplay(119, '/мес');
    }
}

function initSwitcher() {
    const monthlySwitch = document.getElementById('monthly-switch');
    const yearlySwitch = document.getElementById('yearly-switch');
    const slider = document.querySelector('.switcher-slider');

    if (monthlySwitch && yearlySwitch && slider) {
        monthlySwitch.classList.add('active');
        yearlySwitch.classList.remove('active');
        slider.style.width = `${monthlySwitch.offsetWidth}px`;
        slider.style.left = `0px`;

        monthlySwitch.addEventListener('click', () => {
            if (!monthlySwitch.classList.contains('active')) {
                monthlySwitch.classList.add('active');
                yearlySwitch.classList.remove('active');
                slider.style.width = `${monthlySwitch.offsetWidth}px`;
                slider.style.left = `0px`;
                animatePriceChange(119, '/мес');
            }
        });

        yearlySwitch.addEventListener('click', () => {
            if (!yearlySwitch.classList.contains('active')) {
                yearlySwitch.classList.add('active');
                monthlySwitch.classList.remove('active');
                slider.style.width = `${yearlySwitch.offsetWidth}px`;
                slider.style.left = `${monthlySwitch.offsetWidth}px`;
                animatePriceChange(679, '/год');
            }
        });
    }
}

function animatePriceChange(targetAmount, period) {
    const priceAmount = document.getElementById('price-amount');
    const pricePeriod = document.getElementById('price-period');
    const currentAmount = parseInt(priceAmount.textContent);
    
    if (currentAmount === targetAmount) return;
    
    priceAmount.classList.add('counting');
    
    const startAmount = currentAmount;
    const difference = targetAmount - startAmount;
    const duration = 500;
    let startTime = null;
    
    function animate(currentTime) {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        
        const currentValue = Math.floor(startAmount + difference * easeProgress);
        priceAmount.textContent = currentValue;
        
        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            priceAmount.textContent = targetAmount;
            setTimeout(() => {
                priceAmount.classList.remove('counting');
            }, 100);
        }
    }
    
    requestAnimationFrame(animate);
    pricePeriod.textContent = period;
}

function updatePriceDisplay(amount, period) {
    const priceAmount = document.getElementById('price-amount');
    const pricePeriod = document.getElementById('price-period');
    
    if (priceAmount) {
        priceAmount.textContent = amount;
    }
    if (pricePeriod) {
        pricePeriod.textContent = period;
    }
}

function disableButton(button, duration = 3000) {
    if (isButtonDisabled) return false;
    
    isButtonDisabled = true;
    button.disabled = true;
    const originalText = button.textContent;
    button.textContent = 'Загрузка...';
    
    setTimeout(() => {
        isButtonDisabled = false;
        button.disabled = false;
        button.textContent = originalText;
    }, duration);
    
    return true;
}

let authType;
function openModal(type) {
    authType = type;
    const lang = localStorage.getItem('language') || 'ru';
    const modal = document.getElementById('auth-modal');
    const title = document.getElementById('modal-title');
    const button = document.getElementById('modal-button');
    const message = document.getElementById('modal-message');
    const confirmPasswordGroup = document.getElementById('confirm-password-group');
    const forgotLink = document.getElementById('forgot-password-link');
    
    message.textContent = '';
    document.getElementById('modal-email').value = '';
    document.getElementById('modal-password').value = '';
    
    if (type === 'register') {
        title.textContent = translations[lang].registration;
        button.textContent = translations[lang].registration;
        confirmPasswordGroup.style.display = 'block';
        document.getElementById('modal-confirm-password').value = '';
        forgotLink.style.display = 'none';
    } else {
        title.textContent = translations[lang].login;
        button.textContent = translations[lang].login;
        confirmPasswordGroup.style.display = 'none';
        forgotLink.style.display = 'block';
    }
    
    modal.style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function handleAuth() {
    if (isButtonDisabled) return;
    
    const lang = localStorage.getItem('language') || 'ru';
    const email = document.getElementById('modal-email').value;
    const password = document.getElementById('modal-password').value;
    const confirmPassword = document.getElementById('modal-confirm-password').value;
    const authButton = document.getElementById('modal-button');

    if (!disableButton(authButton, 5000)) return;

    if (!email || !password) {
        document.getElementById('modal-message').textContent = translations[lang].fill_fields;
        isButtonDisabled = false;
        authButton.disabled = false;
        authButton.textContent = authType === 'register' ? translations[lang].registration : translations[lang].login;
        return;
    }

    if (authType === 'register') {
        if (password !== confirmPassword) {
            document.getElementById('modal-message').textContent = translations[lang].passwords_mismatch;
            isButtonDisabled = false;
            authButton.disabled = false;
            authButton.textContent = translations[lang].registration;
            return;
        }
        if (password.length < 8) {
            document.getElementById('modal-message').textContent = translations[lang].password_short;
            isButtonDisabled = false;
            authButton.disabled = false;
            authButton.textContent = translations[lang].registration;
            return;
        }
    }

    const endpoint = authType === 'register' ? '/register' : '/login';
    
    fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    })
    .then(res => res.json())
    .then(data => {
        if (data.temp_token) {
            tempToken = data.temp_token;
            closeModal('auth-modal');
            document.getElementById('2fa-code').value = '';
            document.getElementById('2fa-modal').style.display = 'flex';
            
            // Если email не отправился, показываем код в alert
            if (data.debug_code) {
                alert(`Код подтверждения: ${data.debug_code}\n\nEmail не отправлен. Используйте этот код для входа.`);
            }
        } else {
            document.getElementById('modal-message').textContent = data.message || translations[lang].error;
        }
        isButtonDisabled = false;
        authButton.disabled = false;
        authButton.textContent = authType === 'register' ? translations[lang].registration : translations[lang].login;
    })
    .catch(err => {
        console.error('Auth error:', err);
        document.getElementById('modal-message').textContent = translations[lang].error;
        isButtonDisabled = false;
        authButton.disabled = false;
        authButton.textContent = authType === 'register' ? translations[lang].registration : translations[lang].login;
    });
}

function verify2FA() {
    console.log('verify2FA called');
    const code = document.getElementById('2fa-code').value;
    if (!code) {
        showNotification('Введите код подтверждения');
        return;
    }
    
    const verifyButton = document.getElementById('2fa-button');
    if (!disableButton(verifyButton, 3000)) return;

    fetch(`${API_URL}/verify_2fa`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ temp_token: tempToken, code })
    })
    .then(res => res.json())
    .then(data => {
        console.log('2FA response:', data);
        if (data.token) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userEmail', jwt_decode(data.token).email);
            updateNavAfterLogin();
            showSection('profile-section');
            loadProfile();
            document.getElementById('2fa-modal').style.display = 'none';
            showNotification('Успешный вход!');
        } else {
            showNotification(data.message || 'Неверный код');
        }
        isButtonDisabled = false;
        verifyButton.disabled = false;
        verifyButton.textContent = translations[localStorage.getItem('language') || 'ru'].confirm;
    })
    .catch(err => {
        console.error('2FA error:', err);
        showNotification('Ошибка верификации');
        isButtonDisabled = false;
        verifyButton.disabled = false;
        verifyButton.textContent = translations[localStorage.getItem('language') || 'ru'].confirm;
    });
}

function setupEnterHandlers() {
    document.getElementById('modal-password').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleAuth();
        }
    });

    document.getElementById('2fa-code').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            verify2FA();
        }
    });

    document.getElementById('confirm-new-password-2').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            document.getElementById('changePasswordForm').dispatchEvent(new Event('submit'));
        }
    });

    document.getElementById('confirm-new-password').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            resetPassword();
        }
    });
    
    document.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && e.target.matches('#contacts-list input')) {
            e.preventDefault();
            saveContacts();
        }
    });
}

document.getElementById('changePasswordForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const newMasterPassword = document.getElementById('new-master-password').value;
    const confirmNewMasterPassword = document.getElementById('confirm-new-master-password').value;
    const lang = localStorage.getItem('language') || 'ru';

    if (!newMasterPassword || !confirmNewMasterPassword) {
        showNotification('Все поля обязательны для заполнения');
        return;
    }

    if (newMasterPassword !== confirmNewMasterPassword) {
        showNotification(translations[lang].passwords_do_not_match);
        return;
    }

    const submitButton = this.querySelector('button[type="submit"]');
    
    if (!disableButton(submitButton, 3000)) return;

    localStorage.setItem('masterPasswordCreated', 'true');
    masterPasswordCreated = true;
    
    showNotification('Мастер-пароль успешно создан!');
    closeModal('changePasswordModal');
    document.getElementById('changePasswordForm').reset();
    updateMasterPasswordButton();
    
    isButtonDisabled = false;
    submitButton.disabled = false;
    submitButton.textContent = masterPasswordCreated ? translations[lang].change_master_password : translations[lang].create_master_password;
});

function sendLegacy() {
    const lang = localStorage.getItem('language') || 'ru';
    
    if (selectedEncryptionMethod === 'master_password' && !masterPasswordCreated) {
        showNotification('Сначала создайте мастер-пароль в профиле!');
        return;
    }

    if (selectedEncryptionMethod === 'master_password') {
        openMasterPasswordForSendModal();
        return;
    }

    const sendButton = document.getElementById('send-legacy-button');
    if (!disableButton(sendButton, 5000)) return;

    fetch(`${API_URL}/send_legacy`, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json', 
            'Authorization': localStorage.getItem('token') 
        },
        body: JSON.stringify({ 
            encryptionMethod: selectedEncryptionMethod
        })
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            showNotification(`Завещание отправлено контактам (метод: ${data.encryptionMethod})`);
        } else {
            showNotification(data.message || translations[lang].error);
        }
        isButtonDisabled = false;
        sendButton.disabled = false;
        sendButton.textContent = translations[lang].send_to_contacts;
    })
    .catch(err => {
        console.error('Send legacy error:', err);
        showNotification('Ошибка отправки');
        isButtonDisabled = false;
        sendButton.disabled = false;
        sendButton.textContent = translations[lang].send_to_contacts;
    });
}

function sendLegacyWithMasterPassword(masterPassword) {
    const lang = localStorage.getItem('language') || 'ru';
    const sendButton = document.getElementById('send-legacy-button');
    
    if (!disableButton(sendButton, 5000)) return;

    fetch(`${API_URL}/send_legacy`, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json', 
            'Authorization': localStorage.getItem('token') 
        },
        body: JSON.stringify({ 
            encryptionMethod: selectedEncryptionMethod,
            masterPassword: masterPassword
        })
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            showNotification(`Завещание отправлено контактам (метод: ${data.encryptionMethod})`);
        } else {
            showNotification(data.message || translations[lang].error);
        }
        isButtonDisabled = false;
        sendButton.disabled = false;
        sendButton.textContent = translations[lang].send_to_contacts;
    })
    .catch(err => {
        console.error('Send legacy error:', err);
        showNotification('Ошибка отправки');
        isButtonDisabled = false;
        sendButton.disabled = false;
        sendButton.textContent = translations[lang].send_to_contacts;
    });
}

function updateSubscriptionDisplay(subscription) {
    const subscriptionLink = document.getElementById('subscription-plan');
    if (subscriptionLink) {
        let displayText = subscription;
        let displayClass = subscription;
        
        if (subscription === 'free') {
            displayText = 'Free';
            displayClass = 'free';
        } else if (subscription.includes('premium')) {
            displayText = 'Premium';
            displayClass = 'premium';
        } else if (subscription === 'lifetime') {
            displayText = 'Premium Навсегда';
            displayClass = 'premium';
        }
        
        subscriptionLink.textContent = displayText;
        subscriptionLink.className = 'plan-link ' + displayClass;
    }
}

function loadProfile() {
    const lang = localStorage.getItem('language') || 'ru';
    const token = localStorage.getItem('token');
    
    if (!token) {
        console.error('Токен не найден');
        return;
    }

    fetch(`${API_URL}/profile`, {
        headers: { 'Authorization': token }
    })
    .then(res => {
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
    })
    .then(data => {
        if (!data.success) {
            throw new Error(data.message || 'Ошибка загрузки профиля');
        }

        const userEmail = jwt_decode(token).email;
        document.getElementById('profile-email').innerHTML = `${translations[lang].email}: ${userEmail}`;
        
        try {
            const regDate = new Date(data.registrationDate);
            const lastLogin = new Date(data.lastLogin);
            
            document.getElementById('registration-date').innerHTML = `${translations[lang].registration_date}: ${regDate.toLocaleDateString('ru-RU')}`;
            document.getElementById('last-login').innerHTML = `${translations[lang].last_login}: ${lastLogin.toLocaleDateString('ru-RU')}`;
        } catch (dateError) {
            console.error('Ошибка форматирования дат:', dateError);
            document.getElementById('registration-date').innerHTML = `${translations[lang].registration_date}: Неизвестно`;
            document.getElementById('last-login').innerHTML = `${translations[lang].last_login}: Неизвестно`;
        }
        
        localStorage.setItem('subscription', data.subscription || 'free');
        updateSubscriptionDisplay(data.subscription || 'free');
        updateMasterPasswordButton();

        const twoFaStatus = data.twoFactorEnabled ? 'Вкл' : 'Выкл';
        document.getElementById('two-factor-status').innerHTML = `${translations[lang].two_factor_auth}: ${twoFaStatus}`;

        return fetch(`${API_URL}/load`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': token }
        });
    })
    .then(res => {
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
    })
    .then(legacyData => {
        if (!legacyData.success) {
            throw new Error(legacyData.message || 'Ошибка загрузки завещания');
        }
        updateLegacyStatus(legacyData, lang);
    })
    .catch(err => {
        console.error("Ошибка загрузки профиля:", err);
        
        if (err.message.includes('401')) {
            logout();
            showNotification('Сессия истекла. Пожалуйста, войдите снова.');
            return;
        }
        
        try {
            const userEmail = jwt_decode(token).email;
            document.getElementById('profile-email').innerHTML = `${translations[lang].email}: ${userEmail}`;
        } catch (e) {
            document.getElementById('profile-email').innerHTML = `${translations[lang].email}: Ошибка загрузки`;
        }
        
        document.getElementById('registration-date').innerHTML = `${translations[lang].registration_date}: Ошибка загрузки`;
        document.getElementById('last-login').innerHTML = `${translations[lang].last_login}: Ошибка загрузки`;
        document.getElementById('subscription-plan').innerHTML = 'Ошибка загрузки';
        document.getElementById('two-factor-status').innerHTML = `${translations[lang].two_factor_auth}: Ошибка загрузки`;
        
        setErrorStatus(lang);
    });
}

function updateMasterPasswordButton() {
    const masterPasswordButton = document.getElementById('master-password-button');
    const lang = localStorage.getItem('language') || 'ru';
    
    if (masterPasswordButton) {
        if (masterPasswordCreated) {
            masterPasswordButton.textContent = translations[lang].change_master_password;
            document.getElementById('master-password-title').textContent = 'Сменить мастер-пароль';
            document.getElementById('master-password-submit').textContent = 'Сменить мастер-пароль';
        } else {
            masterPasswordButton.textContent = translations[lang].create_master_password;
            document.getElementById('master-password-title').textContent = 'Создать мастер-пароль';
            document.getElementById('master-password-submit').textContent = 'Создать мастер-пароль';
        }
    }
}

function setupEncryptionMethods() {
    console.log('setupEncryptionMethods вызвана');
    
    const encryptionCards = document.querySelectorAll('.encryption-card');
    console.log('Найдено карточек шифрования:', encryptionCards.length);
    
    if (encryptionCards.length === 0) {
        console.error('Карточки шифрования не найдены!');
        return;
    }
    
    encryptionCards.forEach(card => {
        card.classList.remove('selected');
        if (card.getAttribute('data-method') === selectedEncryptionMethod) {
            card.classList.add('selected');
        }
    });
    
    encryptionCards.forEach(card => {
        card.removeEventListener('click', handleEncryptionCardClick);
        card.addEventListener('click', handleEncryptionCardClick);
    });
    
    console.log('Обработчики для карточек шифрования установлены');
}

function handleEncryptionCardClick() {
    const method = this.getAttribute('data-method');
    console.log('Клик по карточке:', method);
    
    if (method === 'master_password' && !masterPasswordCreated) {
        showNotification('Сначала создайте мастер-пароль в профиле!');
        return;
    }
    
    const encryptionCards = document.querySelectorAll('.encryption-card');
    encryptionCards.forEach(c => c.classList.remove('selected'));
    
    this.classList.add('selected');
    selectedEncryptionMethod = method;
    console.log('Выбран метод шифрования:', selectedEncryptionMethod);
}

function setupMenuClose() {
    document.addEventListener('click', function(e) {
        const userMenuButton = document.getElementById('user-menu-button');
        const userSubmenu = document.getElementById('user-submenu');
        
        if (userSubmenu && userSubmenu.style.display === 'block') {
            if (!userMenuButton.contains(e.target) && !userSubmenu.contains(e.target)) {
                userSubmenu.style.display = 'none';
            }
        }
    });
}

function setup2FAHandler() {
    const twoFaButton = document.getElementById('2fa-button');
    if (twoFaButton) {
        twoFaButton.removeEventListener('click', verify2FA);
        twoFaButton.addEventListener('click', verify2FA);
        console.log('2FA handler установлен');
    }
}

function openMasterPasswordModal() {
    document.getElementById('changePasswordModal').style.display = 'flex';
    document.getElementById('changePasswordForm').reset();
}

function openMasterPasswordForSendModal() {
    document.getElementById('master-password-send-modal').style.display = 'flex';
    document.getElementById('master-password-for-send').value = '';
}

function openSupportTab(tabName) {
    const tabs = document.querySelectorAll('#support-section .tab-content');
    const buttons = document.querySelectorAll('#support-section .tab-button');
    
    tabs.forEach(tab => tab.classList.remove('active'));
    buttons.forEach(button => button.classList.remove('active'));
    
    document.getElementById(`${tabName}-tab`).classList.add('active');
    document.querySelector(`#support-section .tab-button[data-tab="${tabName}"]`).classList.add('active');
}

function sendSupportRequest() {
    const subject = document.getElementById('support-subject').value;
    const message = document.getElementById('support-message').value;
    
    if (!subject || !message) {
        showNotification('Заполните тему и сообщение');
        return;
    }
    
    const requestId = 'SR' + Date.now();
    const requests = JSON.parse(localStorage.getItem('supportRequests') || '[]');
    
    requests.push({
        id: requestId,
        subject: subject,
        message: message,
        date: new Date().toLocaleString(),
        status: 'В обработке',
        response: ''
    });
    
    localStorage.setItem('supportRequests', JSON.stringify(requests));
    
    showNotification('Запрос в поддержку отправлен! Номер вашего обращения: ' + requestId);
    openSupportTab('request-history');
    loadSupportRequests();
    
    document.getElementById('support-subject').value = '';
    document.getElementById('support-message').value = '';
}

function loadSupportRequests() {
    const requests = JSON.parse(localStorage.getItem('supportRequests') || '[]');
    const container = document.getElementById('support-requests-list');
    
    if (requests.length === 0) {
        container.innerHTML = '<p class="no-requests">У вас пока нет обращений в поддержку</p>';
        return;
    }
    
    container.innerHTML = '';
    
    requests.forEach(request => {
        const requestElement = document.createElement('div');
        requestElement.className = 'support-request';
        requestElement.innerHTML = `
            <div class="request-header">
                <h4>${request.subject}</h4>
                <span class="request-status ${request.status === 'Решено' ? 'solved' : 'pending'}">${request.status}</span>
            </div>
            <p class="request-date">${request.date}</p>
            <p class="request-message">${request.message}</p>
            ${request.response ? `<div class="request-response"><strong>Ответ поддержки:</strong><p>${request.response}</p></div>` : ''}
        `;
        container.appendChild(requestElement);
    });
}

function setupEventListeners() {
    document.getElementById('register-button').addEventListener('click', () => openModal('register'));
    document.getElementById('login-button').addEventListener('click', () => openModal('login'));
    document.getElementById('start-free-button').addEventListener('click', () => openModal('register'));
    
    document.getElementById('close-auth-modal').addEventListener('click', () => closeModal('auth-modal'));
    document.getElementById('close-2fa-modal').addEventListener('click', () => closeModal('2fa-modal'));
    document.getElementById('close-reset-modal').addEventListener('click', () => closeModal('reset-modal'));
    document.getElementById('close-contacts-modal').addEventListener('click', () => closeModal('contacts-modal'));
    document.getElementById('close-claim-modal').addEventListener('click', () => closeModal('claim-modal'));
    document.getElementById('close-password-modal').addEventListener('click', () => closeModal('changePasswordModal'));
    document.getElementById('close-master-password-send-modal').addEventListener('click', () => closeModal('master-password-send-modal'));
    
    document.getElementById('modal-button').addEventListener('click', handleAuth);
    document.getElementById('forgot-password-link').addEventListener('click', openForgotPasswordModal);
    
    document.getElementById('user-menu-button').addEventListener('click', toggleUserSubmenu);
    
    const submenuLinks = document.querySelectorAll('#user-submenu a');
    submenuLinks[0].addEventListener('click', () => showSection('profile-section'));
    submenuLinks[1].addEventListener('click', () => showSection('settings-section'));
    submenuLinks[2].addEventListener('click', () => showSection('legacy-section'));
    submenuLinks[3].addEventListener('click', () => showSection('premium-section'));
    submenuLinks[4].addEventListener('click', () => showSection('support-section'));
    submenuLinks[5].addEventListener('click', logout);
    
    document.getElementById('master-password-button').addEventListener('click', openMasterPasswordModal);
    document.getElementById('contacts-button').addEventListener('click', openContactsModal);
    document.getElementById('go-to-legacy-button').addEventListener('click', () => showSection('legacy-section'));
    document.getElementById('download-legacy-button').addEventListener('click', downloadLegacy);
    
    document.getElementById('back-to-profile-button').addEventListener('click', () => showSection('profile-section'));
    
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', (e) => {
            const tabName = e.target.getAttribute('data-tab');
            openTab(tabName);
        });
    });
    
    document.getElementById('add-social-button').addEventListener('click', () => addSocialAccount());
    document.getElementById('add-crypto-button').addEventListener('click', () => addCryptoWallet());
    document.getElementById('generate-ai-button').addEventListener('click', generateAI);
    document.getElementById('save-legacy-button').addEventListener('click', saveLegacy);
    document.getElementById('send-legacy-button').addEventListener('click', sendLegacy);
    document.getElementById('download-legacy-button-2').addEventListener('click', downloadLegacy);
    document.getElementById('back-to-profile-button-2').addEventListener('click', () => showSection('profile-section'));
    
    document.getElementById('subscribe-premium-button').addEventListener('click', subscribeMonthlyOrYearly);
    document.getElementById('subscribe-lifetime-button').addEventListener('click', () => subscribe('lifetime'));
    document.getElementById('back-from-premium-button').addEventListener('click', () => showSection('profile-section'));
    
    document.getElementById('add-contact-button').addEventListener('click', () => addContactField());
    document.getElementById('save-contacts-button').addEventListener('click', saveContacts);
    
    document.getElementById('send-reset-code-button').addEventListener('click', sendResetCode);
    document.getElementById('reset-password-button').addEventListener('click', resetPassword);
    
    document.getElementById('claim-legacy-link').addEventListener('click', openClaimModal);
    document.getElementById('claim-legacy-button').addEventListener('click', claimLegacy);
    
    document.getElementById('send-support-button').addEventListener('click', sendSupportRequest);
    document.getElementById('back-from-support-button').addEventListener('click', () => showSection('profile-section'));
    
    document.querySelectorAll('#support-section .tab-button').forEach(button => {
        button.addEventListener('click', (e) => {
            const tabName = e.target.getAttribute('data-tab');
            openSupportTab(tabName);
        });
    });
    
    document.getElementById('master-password-send-button').addEventListener('click', () => {
        const masterPassword = document.getElementById('master-password-for-send').value;
        if (!masterPassword) {
            showNotification('Введите мастер-пароль');
            return;
        }
        closeModal('master-password-send-modal');
        sendLegacyWithMasterPassword(masterPassword);
    });

    setup2FAHandler();
}

function initializeApp() {
    const theme = localStorage.getItem('theme') || 'dark';
    const lang = localStorage.getItem('language') || 'ru';
    applyTheme(theme);
    setLanguage(lang);
    
    const themeSelect = document.getElementById('theme-select');
    const languageSelect = document.getElementById('language-select');
    if (themeSelect) themeSelect.value = theme;
    if (languageSelect) languageSelect.value = lang;

    const saveButton = document.getElementById('save-settings');
    if (saveButton) {
        saveButton.addEventListener('click', () => {
            const newTheme = themeSelect.value;
            const newLang = languageSelect.value;
            localStorage.setItem('theme', newTheme);
            localStorage.setItem('language', newLang);
            applyTheme(newTheme);
            setLanguage(newLang);
        });
    }

    setupEventListeners();
    setupEnterHandlers();
    setupMenuClose();
    setup2FAHandler();

    masterPasswordCreated = localStorage.getItem('masterPasswordCreated') === 'true';
    
    const token = localStorage.getItem('token');
    if (token) {
        try {
            const decoded = jwt_decode(token);
            const currentTime = Date.now() / 1000;
            
            if (decoded.exp && decoded.exp > currentTime) {
                updateNavAfterLogin();
                
                const lastSection = localStorage.getItem('currentSection');
                if (lastSection && lastSection !== 'home') {
                    showSection(lastSection);
                } else {
                    showSection('profile-section');
                }
                
                loadProfile();
                console.log('Сессия восстановлена');
            } else {
                console.log('Токен истек, выполняем выход');
                logout();
                showSection('home');
            }
        } catch (error) {
            console.error('Ошибка при проверке токена:', error);
            logout();
            showSection('home');
        }
    } else {
        showSection('home');
    }

    openTab('social');
    initSwitcher();
    updateMasterPasswordButton();
    
    setTimeout(setupEncryptionMethods, 500);
    loadSupportRequests();
}

window.onload = initializeApp;

window.addEventListener('beforeunload', function() {
    const currentSection = localStorage.getItem('currentSection') || 'home';
    localStorage.setItem('lastKnownSection', currentSection);
});

function jwt_decode(token) {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
        return JSON.parse(jsonPayload);
    } catch (error) {
        console.error('Ошибка декодирования JWT:', error);
        throw error;
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.style.opacity = 0;
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

function updateNavAfterLogin() {
    document.getElementById('register-button').style.display = 'none';
    document.getElementById('login-button').style.display = 'none';
    document.getElementById('user-menu-button').style.display = 'inline-block';
}

function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('subscription');
    localStorage.removeItem('currentSection');
    document.getElementById('register-button').style.display = 'inline-block';
    document.getElementById('login-button').style.display = 'inline-block';
    document.getElementById('user-menu-button').style.display = 'none';
    showSection('home');
}

function toggleUserSubmenu() {
    const submenu = document.getElementById('user-submenu');
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
}

function openContactsModal() {
    const lang = localStorage.getItem('language') || 'ru';
    const modal = document.getElementById('contacts-modal');
    const list = document.getElementById('contacts-list');
    list.innerHTML = '';
    fetch(`${API_URL}/get_contacts`, {
        headers: { 'Authorization': localStorage.getItem('token') }
    }).then(res => res.json()).then(data => {
        if (data.contacts) {
            data.contacts.forEach(contact => addContactField(contact));
        }
        if (list.children.length === 0) {
            addContactField();
        }
        modal.style.display = 'flex';
    });
}

function addContactField(value = '') {
    const list = document.getElementById('contacts-list');
    const div = document.createElement('div');
    div.className = 'contact-item';
    div.innerHTML = `
        <input type="email" placeholder="email@example.com" value="${value}">
        <button class="delete-button" onclick="this.parentNode.remove()"><i class="fas fa-times"></i></button>
    `;
    list.appendChild(div);
}

function saveContacts() {
    const contacts = Array.from(document.querySelectorAll('#contacts-list input')).map(input => input.value);
    fetch(`${API_URL}/set_contacts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') },
        body: JSON.stringify({ contacts })
    }).then(res => res.json()).then(data => {
        showNotification(data.message);
        closeModal('contacts-modal');
    });
}

function saveLegacy() {
    const lang = localStorage.getItem('language') || 'ru';
    
    if (selectedEncryptionMethod === 'master_password' && !masterPasswordCreated) {
        showNotification('Сначала создайте мастер-пароль в профиле!');
        return;
    }

    const data = {
        social: Array.from(document.querySelectorAll('#social-accounts .dynamic-field')).map(field => ({
            name: field.querySelectorAll('input')[0].value,
            login: field.querySelectorAll('input')[1].value,
            password: field.querySelectorAll('input')[2].value,
            instructions: field.querySelector('textarea').value
        })),
        crypto: Array.from(document.querySelectorAll('#crypto-wallets .dynamic-field')).map(field => ({
            name: field.querySelectorAll('input')[0].value,
            address: field.querySelectorAll('input')[1].value,
            seed: field.querySelectorAll('textarea')[0].value,
            instructions: field.querySelectorAll('textarea')[1].value
        })),
        credentials: document.getElementById('credentials').value,
        messages: document.getElementById('messages').value
    };

    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), 'legacy_net_default_key').toString();
    fetch(`${API_URL}/save`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') },
        body: JSON.stringify({ encrypted })
    }).then(res => res.json()).then(data => {
        showNotification(data.message);
    });
}

function downloadLegacy() {
    const lang = localStorage.getItem('language') || 'ru';
    const subscription = localStorage.getItem('subscription') || 'free';
    if (subscription === 'free') {
        showNotification('Экспорт доступен только в премиум версии!');
        return;
    }

    fetch(`${API_URL}/load`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') }
    }).then(res => res.json()).then(data => {
        if (data.encrypted) {
            try {
                const bytes = CryptoJS.AES.decrypt(data.encrypted, 'legacy_net_default_key');
                const decrypted = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
                const blob = new Blob([JSON.stringify(decrypted, null, 2)], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'legacy.json';
                a.click();
                URL.revokeObjectURL(url);
            } catch (err) {
                showNotification('Ошибка при загрузке завещания');
            }
        } else {
            showNotification('Нет сохраненного завещания');
        }
    });
}

function openClaimModal() {
    document.getElementById('claim-modal').style.display = 'flex';
    document.getElementById('claim-message').textContent = '';
    document.getElementById('claim-result').style.display = 'none';
}

function claimLegacy() {
    const email = document.getElementById('claim-email').value;
    const claimCode = document.getElementById('claim-code').value;
    const masterPassword = document.getElementById('claim-master-password').value;
    if (email && claimCode) {
        fetch(`${API_URL}/claim_legacy`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, claimCode })
        }).then(res => res.json()).then(data => {
            if (data.encrypted) {
                try {
                    const bytes = CryptoJS.AES.decrypt(data.encrypted, masterPassword);
                    const decrypted = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
                    displayLegacy(decrypted);
                } catch (err) {
                    document.getElementById('claim-message').textContent = 'Неверный мастер-пароль или ошибка дешифровки';
                }
            } else {
                document.getElementById('claim-message').textContent = data.message || 'Ошибка';
            }
        });
    } else {
        document.getElementById('claim-message').textContent = 'Заполните поля';
    }
}

function displayLegacy(decrypted) {
    const result = document.getElementById('claim-result');
    result.innerHTML = '<h3>Завещание</h3>';
    if (decrypted.social && decrypted.social.length) {
        result.innerHTML += '<h4>Соцсети</h4>';
        decrypted.social.forEach(acc => {
            result.innerHTML += `<p>${acc.name}: Логин ${acc.login}, Пароль ${acc.password}, Инструкции: ${acc.instructions}</p>`;
        });
    }
    if (decrypted.crypto && decrypted.crypto.length) {
        result.innerHTML += '<h4>Крипто</h4>';
        decrypted.crypto.forEach(wallet => {
            result.innerHTML += `<p>${wallet.name}: Адрес ${wallet.address}, Сид ${wallet.seed}, Инструкции: ${wallet.instructions}</p>`;
        });
    }
    if (decrypted.credentials) {
        result.innerHTML += '<h4>Пароли</h4><p>' + decrypted.credentials + '</p>';
    }
    if (decrypted.messages) {
        result.innerHTML += '<h4>Сообщения</h4><p>' + decrypted.messages + '</p>';
    }
    result.style.display = 'block';
}

function addSocialAccount(name = '', login = '', password = '', instructions = '') {
    const lang = localStorage.getItem('language') || 'ru';
    const container = document.getElementById('social-accounts');
    const div = document.createElement('div');
    div.className = 'dynamic-field';
    div.innerHTML = `
        <input type="text" placeholder="${lang === 'ru' ? 'Название аккаунта (VK, Instagram)' : 'Account Name (VK, Instagram)'} " value="${name}">
        <input type="text" placeholder="${lang === 'ru' ? 'Логин' : 'Login'}" value="${login}">
        <input type="password" placeholder="${lang === 'ru' ? 'Пароль' : 'Password'}" value="${password}">
        <textarea placeholder="${lang === 'ru' ? 'Инструкции (удалить, передать)' : 'Instructions (delete, transfer)'}">${instructions}</textarea>
        <button class="delete-button" onclick="this.parentNode.remove()"><i class="fas fa-times"></i></button>
    `;
    container.appendChild(div);
}

function addCryptoWallet(name = '', address = '', seed = '', instructions = '') {
    const lang = localStorage.getItem('language') || 'ru';
    const container = document.getElementById('crypto-wallets');
    const div = document.createElement('div');
    div.className = 'dynamic-field';
    div.innerHTML = `
        <input type="text" placeholder="${lang === 'ru' ? 'Тип кошелька (Bitcoin, Ethereum)' : 'Wallet Type (Bitcoin, Ethereum)'} " value="${name}">
        <input type="text" placeholder="${lang === 'ru' ? 'Адрес кошелька' : 'Wallet Address'}" value="${address}">
        <textarea placeholder="${lang === 'ru' ? 'Сид-фраза' : 'Seed Phrase'}">${seed}</textarea>
        <textarea placeholder="${lang === 'ru' ? 'Инструкции (передать, доступ)' : 'Instructions (transfer, access)'}">${instructions}</textarea>
        <button class="delete-button" onclick="this.parentNode.remove()"><i class="fas fa-times"></i></button>
    `;
    container.appendChild(div);
}

function openTab(tabName) {
    const tabs = document.getElementsByClassName('tab-content');
    for (let tab of tabs) {
        tab.style.display = 'none';
    }
    document.getElementById(`${tabName}-tab`).style.display = 'block';
}

function generateAI() {
    const lang = localStorage.getItem('language') || 'ru';
    const messages = document.getElementById('messages');
    messages.value = lang === 'ru' ? 'Дорогие близкие, это мое сообщение из AI...' : 'Dear loved ones, this is my AI-generated message...';
    showNotification('AI сгенерировано!');
}

function subscribe(plan) {
    fetch(`${API_URL}/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') },
        body: JSON.stringify({ plan })
    }).then(res => res.json()).then(data => {
        if (data.success) {
            showNotification('Подписка активирована! (Симуляция)');
            localStorage.setItem('subscription', plan);
            loadProfile();
        } else {
            showNotification('Ошибка подписки');
        }
    });
}

function subscribeMonthlyOrYearly() {
    const isYearly = document.getElementById('yearly-switch').classList.contains('active');
    const plan = isYearly ? 'premium_yearly' : 'premium_monthly';
    subscribe(plan);
}

function openForgotPasswordModal() {
    closeModal('auth-modal');
    document.getElementById('reset-modal').style.display = 'flex';
}

function sendResetCode() {
    const email = document.getElementById('reset-email').value;
    fetch(`${API_URL}/forgot_password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
    }).then(res => res.json()).then(data => {
        if (data.temp_token) {
            tempToken = data.temp_token;
            document.getElementById('reset-code-group').style.display = 'block';
            showNotification(data.message);
            
            if (data.debug_code) {
                alert(`Код восстановления: ${data.debug_code}\n\nEmail не отправлен. Используйте этот код.`);
            }
        } else {
            showNotification(data.message);
        }
    });
}

function resetPassword() {
    const code = document.getElementById('reset-code').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-new-password').value;
    const lang = localStorage.getItem('language') || 'ru';
    if (newPassword !== confirmPassword) {
        showNotification(translations[lang].passwords_mismatch);
        return;
    }
    fetch(`${API_URL}/reset_password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ temp_token: tempToken, code, newPassword })
    }).then(res => res.json()).then(data => {
        showNotification(data.message);
        if (data.success) {
            closeModal('reset-modal');
        }
    });
}

function updateLegacyStatus(legacyData, lang) {
    const statusText = document.getElementById('status-text');
    if (legacyData.encrypted) {
        statusText.textContent = translations[lang].legacy_active;
        statusText.className = 'status-text active';
    } else {
        statusText.textContent = translations[lang].legacy_not_created;
        statusText.className = 'status-text inactive';
    }
}

function setErrorStatus(lang) {
    const statusText = document.getElementById('status-text');
    statusText.textContent = translations[lang].status_error;
    statusText.className = 'status-text error';
}
