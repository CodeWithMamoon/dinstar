const express = require("express");
const NotificationController = require("../controllers/notificationController");

const router = express.Router();

router.post("/send-booking-confirmation", NotificationController.sendBookingConfirmation);
router.post("/send-driver-assigned", NotificationController.sendDriverAssignedNotification);

module.exports = router;
