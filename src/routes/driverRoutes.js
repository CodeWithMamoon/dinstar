const express = require('express');
const {
  notifyNewRide,
  alertRideChange,
  sendRideReminder,
} = require('../controllers/driverController');

const router = express.Router();

router.post('/new-ride', notifyNewRide);
router.post('/ride-change', alertRideChange);
router.post('/ride-reminder', sendRideReminder);

module.exports = router;
