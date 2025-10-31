// src/lib/emailjs.js
import emailjs from 'emailjs-com';

export const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    e.target,
    'YOUR_USER_ID'
  ).then(
    () => alert('Message sent!'),
    () => alert('Failed. Try again.')
  );
  e.target.reset();
};