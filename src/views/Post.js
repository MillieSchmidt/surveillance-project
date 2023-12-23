import React from 'react';
import '../css/Post.css';
import { useParams } from 'react-router-dom';
import { posts } from '../posts';

import jelly from '../jelly.png';

const Post = () => {

  const { id } = useParams();
  const title = posts.filter((p) => p.id === id)[0].title;
  const rawText = posts.filter((p) => p.id === id)[0].text;

  let i = 0;
  const text = rawText.split('--').map((t) => {
    i++;
    return <p key={`${i}`}>{t}</p>
  });

  return (
    <div className='post-page'>
        <div className='post'>
          <div className='post-title'>{title}</div>
          <div className='img-container'>
            <img src={jelly} alt='מדוזה' />
          </div>
          {text}
        </div>
    </div>
  );
}

export default Post;