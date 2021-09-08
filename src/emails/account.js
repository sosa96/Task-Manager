const sgMail = require('@sendgrid/mail');

const sendgridAPIkey =
  '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';

sgMail.setApiKey(sendgridAPIkey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'zdravko.sosa@gmail.com',
    subject: 'Welcome!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'zdravko.sosa@gmail.com',
    subject: 'Sorry to see you go!',
    text: `Goodbye, ${name}. I hope to see you back sometime soon.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
