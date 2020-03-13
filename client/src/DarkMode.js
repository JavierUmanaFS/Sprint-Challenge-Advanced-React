import React from 'react';
import { useDarkMode } from './useDarkMode';
import './App.css';

export const DarkMode = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div className='darkmode'>
      <div className="dark-mode__toggle">
        <div
          data-testid='darkmodeToggle'
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </div>
  )
}
