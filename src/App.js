import React, { useState } from 'react';
import logo from './logo.svg';  // Make sure to import the logo file
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <header className="App-header">
        <h1>Welcome to My React App</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <div className="cards">
          <div className="card">
            <h3>Fast Performance</h3>
            <p>React apps are lightning fast!</p>
          </div>
          <div className="card">
            <h3>Component-Based</h3>
            <p>Build encapsulated components for better organization.</p>
          </div>
          <div className="card">
            <h3>Learn Once, Write Anywhere</h3>
            <p>Use your React knowledge on mobile, desktop, or web.</p>
          </div>
        </div>

        <button onClick={toggleDarkMode} className="toggle-button">
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
