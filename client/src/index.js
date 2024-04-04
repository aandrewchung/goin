import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage'; // Import the HomePage component
// import SearchPage from './pages/SearchPage'; // Import the SearchPage component
// import ProfilePage from './pages/ProfilePage'; // Import the ProfilePage component
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<HomePage />} />
      {/* <Route path="/search" element={<SearchPage />} />
      <Route path="/profile" element={<ProfilePage />} /> */}
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);