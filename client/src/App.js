import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import NoMatchPage from './pages/NoMatchPage';

import buttonImage from './assets/images/temp_button.png';
import './App.css';

function App() {
  let navigate = useNavigate();

  return (
    <Routes>
      {/* Define a separate route for the starting page */}
      <Route path="*" element={<NoMatchPage />} />
      <Route path="/" element={
        <div className="App">
          <img
            src={buttonImage}
            alt="Button"
            className="App-button"
            onClick={() => navigate('/home')}
          />
        </div>
      } />
      {/* Other pages */}
      <Route path="/home" element={<HomePage />} />
      <Route path="/create" element={<CreatePage />} />
    </Routes>
  );
}

export default App;
