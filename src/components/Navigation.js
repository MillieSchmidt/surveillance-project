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
            <a className='nav-item' href='https://millieschmidt.net/' rel='noreferrer' target='_blank'>חנות</a>
          </div>
        {/* <br />
        <nav className='navbar navbar-expand-xs navbar-expand-sm navbar-light my-nav'>
            <Link className='nav-item' id='title' to='/'>פרויקט: מעקבים</Link>
            <button className='navbar-toggler my-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon my-toggler-icon'></span>
            </button>

            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul className='navbar-nav'>
                <li className='nav-item'>
                  <Link className='nav-link' to='/'><span className='color'>עמוד הבית</span></Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/posts'><span className='color'>מאמרים</span></Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to='/about'><span className='color'>אודות הפרויקט</span></Link>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='https://millieschmidt.net/' rel='noreferrer' target='_blank'><span className='color'>חנות</span></a>
                </li>
              </ul>
            </div>
          </nav> */}
    </div>
  );
}

export default Navigation;