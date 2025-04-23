require('dotenv').config();

const axios = require('axios');
const fs = require('fs');
const mustache = require('mustache');

const RECEPTION_EMAIL = process.env.CONTACT_EMAIL;
const FROM_NAME = process.env.MAILER_NAME;
const FROM_EMAIL = process.env.MAILER_EMAIL;

const api_instance = axios.create({
  baseURL: 'https://api.sendinblue.com',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'api-key': process.env.SINB_API_KEY,
  },
});

const validateParams = function (senderPayload) {
  let isValid = true;

  Object.keys(senderPayload).forEach((key) => {
    const value = senderPayload[key];

    if (key === 'company' && value.length > 255) {
      // eslint-disable-next-line no-console
      console.error(`Invalid value received for ${key}: ${value}`);
      isValid = false;
    } else if (!value || value === '' || value.length > 255) {
      // eslint-disable-next-line no-console
      console.error(`Invalid value received for ${key}: ${value}`);
      isValid = false;
    }
  });

  return isValid;
};

const handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    let { body: requestBody } = event;
    let { fullName = '', email = '', company = '', interest = '' } = JSON.parse(requestBody);

    // Check that all required fields are present
    const validatePayload = validateParams({ fullName, email, company, interest });
    const isValid = validatePayload;

    if (!isValid) {
      return {
        statusCode: 404,
        body: JSON.stringify({
          message: 'Incorrect or missing fields submitted.',
        }),
      };
    }

    const templateHtml = fs.readFileSync(require.resolve('./contact-template.html'), 'utf8');
    const emailHtml = mustache.render(templateHtml, { fullName, email, company, interest });

    try {
      await api_instance.post(`/v3/smtp/email`, {
        sender: {
          name: FROM_NAME,
          email: FROM_EMAIL,
        },
        to: [
          {
            email: RECEPTION_EMAIL,
          },
        ],
        subject: 'New contact request received',
        htmlContent: emailHtml,
      });

      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'The message has been successfully sent!', success: true }),
      };
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);

      return {
        statusCode: 500,
        body: JSON.stringify({ message: error, success: false }),
      };
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        message: `Something went wrong with form submission.`,
      }),
    };
  }
};

module.exports = { handler };
