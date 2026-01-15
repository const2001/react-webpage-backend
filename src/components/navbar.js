import React from 'react';
import './navbar.css'

const NavigationBar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/gas">Gas</a></li>
        <li><a href="/loginPage">Σελιδα Διαχείρισης</a></li>

      </ul>
    </nav>
      


  );
  
};

export default NavigationBar;