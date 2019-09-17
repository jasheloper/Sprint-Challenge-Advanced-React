import React, { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode.js'

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (

    <>

<h3>
    Dark Mode:
</h3>
    <nav className="navbar">



      <div className="dark-mode__toggle">


        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
    </>
  );
};

export default Navbar;
