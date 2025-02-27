// You can work here or download the template
const contactForm = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name');
const messageInput = document.querySelector('#message');
const emailInput = document.querySelector('#email');

const output = document.querySelector('#output');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!nameInput.value || !messageInput.value || !emailInput.value) {
        output.classList.remove('bg-green-500');
        output.classList.add('bg-red-500');
        output.textContent = 'Please fill out all fields!';
    } else {
        output.innerHTML = `<ul>
        <li>${nameInput.value}</li>
        <li>${emailInput.value}</li>
        <li>${messageInput.value}</li>
        </ul>`;
        output.classList.remove('bg-red-500');
        output.classList.add('bg-green-500');
    }
    contactForm.reset();
});
