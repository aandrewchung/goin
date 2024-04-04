//server.js
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is running');
});

// Handle POST request from CreatePage.js
app.post('/api/create-profile', (req, res) => {
  const { firstName, lastName, description } = req.body; // Destructure the profile data from the request body

  console.log('Received profile:', { firstName, lastName, description });
  
  // add logic

  res.status(201).json({ message: 'Profile created', profile: { firstName, lastName, description } });
});

if (require.main === module) {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;