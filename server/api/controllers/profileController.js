const createProfile = (req, res) => {
  const { firstName, lastName, description } = req.body;
  console.log('Received profile:', { firstName, lastName, description });

  // Add logic to save the profile to a database, etc.
  
  res.status(201).json({ message: 'Profile created', profile: { firstName, lastName, description } });
};

module.exports = {
  createProfile
};
