const express = require('express');
const {
  sendBookingConfirmation,
  notifyDriverAssigned,
  sendArrivalUpdate,
  sendRideReceipt,
} = require('../controllers/passengerController');

const router = express.Router();

router.post('/booking-confirmation', sendBookingConfirmation);
router.post('/driver-assigned', notifyDriverAssigned);
router.post('/arrival-update', sendArrivalUpdate);
router.post('/ride-receipt', sendRideReceipt);

module.exports = router;
