import React, { useState } from 'react';
import Input from './UI/input/Input';
import Button from './UI/button/Button';

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: '', body: '' });
  const addNewPost = (event) => {
    event.preventDefault();
    const newPost = { ...post, id: Date.now() };
    create(newPost);
    setPost({ title: '', body: '' });
  };

  return (
    <form>
      {/* Managed Component */}
      <Input
        type="text"
        placeholder="Post name"
        value={post.title}
        onChange={(event) => setPost({ ...post, title: event.target.value })}
      />
      {/* Unmanaged Component */}
      <Input
        type="text"
        placeholder="Post description"
        value={post.body}
        onChange={(event) => setPost({ ...post, body: event.target.value })}
      />
      <Button onClick={addNewPost}>Add new post</Button>
    </form>
  );
};

export default PostForm;
