const axios = require('axios');
const { DINSTAR_API_KEY, DINSTAR_SMS_URL } = process.env;

const sendSMS = async (phoneNumber, message) => {
  try {
    const response = await axios.post(DINSTAR_SMS_URL, {
      apiKey: DINSTAR_API_KEY,
      to: phoneNumber,
      message: message,
    });
    console.log('SMS sent:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error sending SMS:', error.message);
    throw new Error('Failed to send SMS');
  }
};

module.exports = { sendSMS };
