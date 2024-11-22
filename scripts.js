document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        if (response.ok) {
            alert('Login bem-sucedido');
            window.location.href = 'index.html';
        } else {
            alert('Email ou senha inválidos');
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao tentar fazer login');
    }
});
