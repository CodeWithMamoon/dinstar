const DinstarService = require("../services/dinstarService");

class NotificationController {
  static async sendBookingConfirmation(req, res) {
    const { phoneNumber, bookingDetails } = req.body;

    const message = `Your booking is confirmed. Details: ${bookingDetails}`;
    try {
      const result = await DinstarService.sendSMS(phoneNumber, message);
      res.status(200).json({ message: "SMS sent successfully", result });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async sendDriverAssignedNotification(req, res) {
    const { phoneNumber, driverDetails } = req.body;

    const message = `Driver assigned: ${driverDetails}`;
    try {
      const result = await DinstarService.sendSMS(phoneNumber, message);
      res.status(200).json({ message: "SMS sent successfully", result });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Add similar methods for other functionalities.
}

module.exports = NotificationController;
