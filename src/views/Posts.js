import React from 'react';
import '../css/Posts.css';
import { Link } from 'react-router-dom';
import { posts } from '../posts';

const Posts = () => {

    const texts = posts.map((post) => {
        const title = post.title;
        const rawStub = post.text.substring(0, 200) + '...';
        const post_id = post.id;

        const stub = rawStub.replace('--', ' ');

        return(
            <div className='posts-list-post'>
                <Link key={posts.indexOf(post)} to={`/post/${post_id}`}>
                    <p className='posts-post-title'>{title}</p>
                </Link>
                <span>{stub}</span>
            </div>
        );
    });

  return(
    <div className='posts-container'>
        {texts}
    </div>
  );
}

export default Posts;