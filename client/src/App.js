import React from 'react';
import './App.css';
import Data from './components/Data';
import { DarkMode } from './DarkMode';

function App() {
  return (
    <div className="App">
      <DarkMode />
      <Data />
    </div>
  );
}

export default App;
