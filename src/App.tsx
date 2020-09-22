import React from 'react';
import profileImage from './img/michael-pic.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Michael McCabe - Website</h1>
      <h2>Software Engineer</h2>
      <img src={profileImage} alt="profile-image"/>
    </div>
  );
}

export default App;
