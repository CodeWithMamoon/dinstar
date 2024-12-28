const { sendSMS } = require('../services/smsService');

const sendBookingConfirmation = async (req, res) => {
  const { phoneNumber, rideId } = req.body;

  try {
    const message = `Your booking with ID ${rideId} is confirmed. Thanks for choosing us!`;
    await sendSMS(phoneNumber, message);
    res.status(200).json({ success: true, message: 'Booking confirmation SMS sent' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const notifyDriverAssigned = async (req, res) => {
  const { phoneNumber, driverName, carNumber } = req.body;

  try {
    const message = `Driver ${driverName} (Car: ${carNumber}) has been assigned to your ride.`;
    await sendSMS(phoneNumber, message);
    res.status(200).json({ success: true, message: 'Driver assignment SMS sent' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const sendArrivalUpdate = async (req, res) => {
  const { phoneNumber, eta } = req.body;

  try {
    const message = `Your driver will arrive in ${eta} minutes. Please be ready.`;
    await sendSMS(phoneNumber, message);
    res.status(200).json({ success: true, message: 'Arrival update SMS sent' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const sendRideReceipt = async (req, res) => {
  const { phoneNumber, rideId, amount } = req.body;

  try {
    const message = `Thank you for riding with us! Ride ID: ${rideId}. Total: ${amount} PKR.`;
    await sendSMS(phoneNumber, message);
    res.status(200).json({ success: true, message: 'Ride receipt SMS sent' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  sendBookingConfirmation,
  notifyDriverAssigned,
  sendArrivalUpdate,
  sendRideReceipt,
};
