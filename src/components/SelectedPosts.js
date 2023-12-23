import React from 'react';
import { Link } from 'react-router-dom';

const SelectedPosts = () => {

    return(
        <div className='selected-posts'>
            <p className='selected-title'>מאמרים נבחרים</p>
            <div className='stubs'>
                <div className='first-row'>
                    <div className='selected-post'>
                        <Link to='/post/1'>
                            <p className='selected-post-title'>ספר הניסים</p>
                        </Link>
                        <p className='stub mobile'>אחת הסיבות שאחרי "מעקבים" לא יצא לי שום דבר חדש...</p>
                        <p className='stub hide'>אחת הסיבות שאחרי "מעקבים" לא יצא לי שום דבר חדש, היא כנראה אופן היצירה שלו, שהוא פשוט מלא ניסים. בעצ...</p>
                    </div>
                    <div className='selected-post'>
                        <Link to='/post/1000'>
                            <p className='selected-post-title'>רומן בתמונות</p>
                        </Link>
                        <p className='stub mobile'>אני מכנה את "מעקבים", "רומן בתמונות". אבל מהו רומן...</p>
                        <p className='stub hide'>אני מכנה את "מעקבים", "רומן בתמונות". אבל מהו רומן בתמונות? על גב הספר מתוארים מעט מן הסיפורים שמופ...</p>
                    </div>
                </div>
                <div className='second-row'>
                    <div className='selected-post'>
                        <Link to='/post/11'>
                            <p className='selected-post-title'>העולם השלישי</p>
                        </Link>
                        <p className='stub mobile'>שני מצבי תודעה משונים עוטפים את השינה משני הקצוות שלה. ...</p>
                        <p className='stub hide'>שני מצבי תודעה משונים עוטפים את השינה משני הקצוות שלה. אחד מצד הכניסה לשינה, והוא נקרא "המצב ההיפנגו...</p>
                    </div>
                    <div className='selected-post'>
                        <Link to='/post/100'>
                            <p className='selected-post-title'>חלום מלאכותי</p>
                        </Link>
                        <p className='stub mobile'>במשך שנים אני עוקב אחרי חלומות. אני רושם אותם, מנסה לשים...</p>
                        <p className='stub hide'>במשך שנים אני עוקב אחרי חלומות. אני רושם אותם, מנסה לשים לב לדברים שחוזרים על עצמם, ולפעמים משתמש בה...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectedPosts;