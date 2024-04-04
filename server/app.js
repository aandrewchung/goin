const express = require('express');
const cors = require('cors');
const profileRoutes = require('./api/routes/profileRoutes'); // Import the routes

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.use('/api', profileRoutes); // Use profile routes

module.exports = app;
