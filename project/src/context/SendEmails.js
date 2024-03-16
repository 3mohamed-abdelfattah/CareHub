const mailgun = require('mailgun-js');
const DOMAIN = 'https://app.mailgun.com/app/sending/domains/sandbox8670a07c7c994780aa0c5a13277c6bde.mailgun.org';
const mg = mailgun({apiKey: '3d8f5857fda77daec394c38dbfafc9bf-b02bcf9f-19e564c7', domain: DOMAIN});

const data = {
  from: 'Excited User <me@samples.mailgun.org>',
  to: 'm01126165016@gmail.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomeness!'
};

mg.messages().send(data, function (error, body) {
  if (error) {
    console.error(error);
  } else {
    console.log(body);
  }
});
