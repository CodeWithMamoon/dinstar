const { sendSMS } = require('../services/smsService');

const notifyNewRide = async (req, res) => {
  const { phoneNumber, rideDetails } = req.body;

  try {
    const message = `New ride assigned: ${rideDetails}. Please confirm availability.`;
    await sendSMS(phoneNumber, message);
    res.status(200).json({ success: true, message: 'New ride SMS sent' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const alertRideChange = async (req, res) => {
  const { phoneNumber, newDetails } = req.body;

  try {
    const message = `Ride details changed: ${newDetails}. Please update your route.`;
    await sendSMS(phoneNumber, message);
    res.status(200).json({ success: true, message: 'Ride change SMS sent' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const sendRideReminder = async (req, res) => {
  const { phoneNumber, rideTime } = req.body;

  try {
    const message = `Reminder: Your ride is scheduled at ${rideTime}. Please be on time.`;
    await sendSMS(phoneNumber, message);
    res.status(200).json({ success: true, message: 'Ride reminder SMS sent' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  notifyNewRide,
  alertRideChange,
  sendRideReminder,
};
