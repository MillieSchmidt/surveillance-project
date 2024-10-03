import React from 'react';
import { Link } from 'react-router-dom';
import '../css/MobileNav.css';

const MobileNav = () => {
    return(
        <div className='mobile-navigation'>
            <Link className='nav-item' to='/posts'>מאמרים</Link>|
            <Link className='nav-item' to='/about'>אודות הפרויקט</Link>|
            <a className='nav-item' href='https://millieschmidt.github.io/bookstore/' rel='noreferrer' target='_blank'>חנות</a>
        </div>
    );
}

export default MobileNav;