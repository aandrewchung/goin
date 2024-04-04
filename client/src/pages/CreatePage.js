import React, { useState } from 'react';
import ProfileForm from '../components/ProfileForm';
import '../assets/styles/CreatePage.css';

function CreatePage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submit behavior

    // The data to be sent to the server
    const profileData = { firstName, lastName, description };
    console.log("Profile dat a is: ", profileData);

    try {
    const response = await fetch('http://localhost:3001/api/create-profile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(profileData),
        });
          
      console.log(response);

      if (response.ok) {
        const result = await response.json();
        console.log('Profile created:', result);
        // You can do something here after the profile is successfully created,
        // like redirecting the user to another page
      } else {
        console.error('Failed to create profile:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting profile:', error);
    }
  };

  return (
    <div className="CreatePage">
      <h1>Create Profile</h1>
      <ProfileForm
        firstName={firstName}
        lastName={lastName}
        description={description}
        setFirstName={setFirstName}
        setLastName={setLastName}
        setDescription={setDescription}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default CreatePage;
