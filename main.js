import { saveFormData } from './formData';

document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const formData = {
        name,
        email,
        message
    };

    saveFormData(formData);

    document.getElementById('status-message').textContent = 'Форма успішно відправлена!';
    event.target.reset();
});



  