import React from 'react';
import PostItem from './PostItem';

const PostsList = ({ posts, title, remove }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {posts.map((post, index) => (
        <PostItem
          remove={remove}
          number={index + 1}
          post={post}
          key={post.id}
        />
      ))}
    </div>
  );
};

export default PostsList;
