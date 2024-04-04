import React from 'react';

function ProfileForm({ firstName, lastName, description, setFirstName, setLastName, setDescription, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="first-name">First Name:</label>
        <input
          id="first-name"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="last-name">Last Name:</label>
        <input
          id="last-name"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ProfileForm;
