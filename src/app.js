require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const passengerRoutes = require('./routes/passengerRoutes');
const driverRoutes = require('./routes/driverRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/api/passenger', passengerRoutes);
app.use('/api/driver', driverRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
