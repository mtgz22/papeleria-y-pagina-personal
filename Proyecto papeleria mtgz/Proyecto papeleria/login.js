// Maneja el cambio entre el formulario de inicio de sesión y el de registro
document.getElementById('register-link').addEventListener('click', function(event) {
    event.preventDefault();
    const container = document.getElementById('container');
    container.classList.add('active'); // Activa la clase para mostrar el formulario de registro

    // Ocultar el formulario de inicio de sesión
    document.querySelector('.login-container').classList.add('hidden');
    // Mostrar el formulario de registro
    document.querySelector('.register-container').classList.remove('hidden');
});

document.getElementById('login-link').addEventListener('click', function(event) {
    event.preventDefault();
    const container = document.getElementById('container');
    container.classList.remove('active'); // Desactiva la clase para mostrar el formulario de inicio de sesión

    // Mostrar el formulario de inicio de sesión
    document.querySelector('.login-container').classList.remove('hidden');
    // Ocultar el formulario de registro
    document.querySelector('.register-container').classList.add('hidden');
});

// Inicialmente oculta el formulario de registro
document.querySelector('.register-container').classList.add('hidden');

// Maneja la validación del formulario de registro
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const username = document.getElementById('new-username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorMessage = document.getElementById('error-message-register');

    // Validar que todos los campos estén completos
    if (firstName === '' || lastName === '' || username === '' || email === '' || password === '' || confirmPassword === '') {
        errorMessage.textContent = 'Por favor, completa todos los campos';
        errorMessage.style.display = 'block';
    } 
    // Validar que las contraseñas coincidan
    else if (password !== confirmPassword) {
        errorMessage.textContent = 'Las contraseñas no coinciden';
        errorMessage.style.display = 'block';
    } 
    else {
        errorMessage.style.display = 'none'; // Ocultar mensaje de error
        alert('Registro exitoso'); // Aquí podrías enviar el formulario a tu servidor
    }
});

// Maneja la validación del formulario de inicio de sesión (opcional)
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Ejemplo simple de validación de inicio de sesión
    if (username === '' || password === '') {
        errorMessage.textContent = 'Por favor, completa todos los campos';
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none'; // Ocultar mensaje de error
        alert('Inicio de sesión exitoso'); // Aquí podrías enviar los datos a tu servidor
    }
});