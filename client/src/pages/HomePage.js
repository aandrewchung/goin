//src/pages/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import buttonImage from '../assets/images/temp_button.png'; // Import the button image
import '../assets/styles/HomePage.css'; 

function HomePage() {
  let navigate = useNavigate();

  const navigateToCreate = () => {
    navigate('/create');
  };


  return (
    <div className="HomePage">
      <img
        src={buttonImage}
        alt="Button"
        className="Home-button"
        onClick={navigateToCreate}
      />
    </div>
  );
}

export default HomePage;
