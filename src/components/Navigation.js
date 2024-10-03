import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navstyle.css';

const Navigation = () => {
  return (
    <div className='navigation'>
        <Link className='nav-item' id='title' to='/'>פרויקט: מעקבים</Link>
          &nbsp;
          <div className='menu'>
            <Link className='nav-item' to='/'>עמוד הבית</Link>
              &nbsp;|&nbsp;
            <Link className='nav-item' to='/posts'>מאמרים</Link>
              &nbsp;|&nbsp;
            <Link className='nav-item' to='/about'>אודות הפרויקט</Link>
              &nbsp;|&nbsp;
            <a className='nav-item' href='https://millieschmidt.github.io/bookstore/' rel='noreferrer' target='_blank'>חנות</a>
          </div>
    </div>
  );
}

export default Navigation;