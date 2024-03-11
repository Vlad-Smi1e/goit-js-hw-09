const formRef = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

formRef.addEventListener('input', handleFormInput);

function handleFormInput(event) {
  const formData = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };
  
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

window.addEventListener('DOMContentLoaded', () => {
  const savedFormData = localStorage.getItem('feedback-form-state');

  if (savedFormData) {
    const parsedFormData = JSON.parse(savedFormData);
    emailInput.value = parsedFormData.email;
    messageInput.value = parsedFormData.message;
  }
});

formRef.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formData = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };

  if (formData.email && formData.message) {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    emailInput.value = '';
    messageInput.value = '';
  } else {
    console.log('Please fill in all fields');
  }
}
