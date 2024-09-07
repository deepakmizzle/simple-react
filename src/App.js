import React, { useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to My React App</h1>
        <p>
          Edit <code>src/App.js</code> and save to see the changes.
        </p>

        <button className="toggle-button" onClick={toggleDarkMode}>
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>

        <div className="cards-container">
          <div className="card">
            <h3>Fast Performance</h3>
            <p>React ensures blazing-fast rendering for your web applications.</p>
          </div>
          <div className="card">
            <h3>Component-Based</h3>
            <p>Build encapsulated components that manage their own state.</p>
          </div>
          <div className="card">
            <h3>Learn Once, Write Anywhere</h3>
            <p>React can be used to build web, mobile, and desktop apps!</p>
          </div>
        </div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More About React
        </a>
      </header>
    </div>
  );
}

export default App;
