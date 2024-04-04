import React from 'react';
import './App.css';
import buttonImage from './assets/images/temp_button.png'; // Import the button image
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function App() {
  let navigate = useNavigate(); // Hook to navigate

  const navigateToHome = () => {
    navigate('/home'); // Navigate to /home when the function is called
  };

  return (
    <div className="App">
      <img
        src={buttonImage}
        alt="Button"
        className="App-button"
        onClick={navigateToHome} // Set the click handler
      />
    </div>
  );
}

export default App;
