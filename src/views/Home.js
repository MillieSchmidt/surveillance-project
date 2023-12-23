import React from 'react';
import '../css/Home.css'
import bookcover from '../surveillance-pictures/bookcover.png'
import SelectedPosts from '../components/SelectedPosts';

const Home = () => {

  return (
    <div className='home'>
        <div className='introduction'>
            <p>אנחנו חיים את חיינו בעולמות מקבילים. בעיניים פקוחות, אנחנו קוראים לזה "ערות", ובעיניים עצומות – "חלום". אבל כמה עולמות נוספים נמצאים בין שני אלה, הערות והחלום?</p>
            <p><b>"הספר 'מעקבים' של מילי שמידט מצליח להזכיר כמה כיף היה להיות צעיר, אבל גם כמה זה היה מסובך!"</b><br />
            אורי מאיר, מוציא לאור, הוצאת רסיס נהרה</p>
            <p>ז'אנר: ספרות ספקולטיבית<br />
            הוצאה: רסיס נהרה<br />
            שנה: 2020<br />
            עמודים 183</p>
            <p>ברוכים הבאים לפרויקט: מעקבים</p>
            <a href='https://millieschmidt.net/surveillance.html' rel='noreferrer' target='_blank'><img src={bookcover} alt='כריכת הספר' className='home-cover' /></a>
        </div>
        <SelectedPosts />
    </div>
  );
}

export default Home;