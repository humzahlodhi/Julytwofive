function createForm() {
    const form = document.createElement('form');
    form.setAttribute('id', 'visitorForm');

    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.textContent = 'Name:';
    form.appendChild(nameLabel);

    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('id', 'name');
    nameInput.setAttribute('name', 'name');
    form.appendChild(nameInput);

    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = 'Email:';
    form.appendChild(emailLabel);

    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('id', 'email');
    emailInput.setAttribute('name', 'email');
    form.appendChild(emailInput);

    const messageLabel = document.createElement('label');
    messageLabel.setAttribute('for', 'message');
    messageLabel.textContent = 'Message:';
    form.appendChild(messageLabel);

    const messageInput = document.createElement('textarea');
    messageInput.setAttribute('id', 'message');
    messageInput.setAttribute('name', 'message');
    form.appendChild(messageInput);

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Submit';
    form.appendChild(submitButton);

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = {
            name: nameInput.value,
            email: emailInput.value,
            message: messageInput.value
        };
        console.log('Form submitted:', formData);
        // Handle form submission logic here
    });

    return form;
}

export default createForm;