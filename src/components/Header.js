import React from 'react';
import Navigation from './Navigation';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <div>
        <Navigation />
        <header></header>

        <div className='nav-container'>
          <MobileNav />
        </div>
    </div>
  )
}

export default Header;