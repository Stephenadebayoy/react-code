import React from 'react';
import logo from './asset/logo192.png';

function Header() {
  return (
    <>
      <header>
        <nav className='nav'>
          <img src={logo} alt='' className='logo' />
          <h3>React-facts</h3>
          <ul className='nav-items'>
            <li>Price</li>
            <li>About</li>
            <li>Contact</li>
            <li>Settings</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

//or
export default Header;
