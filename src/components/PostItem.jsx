import React from 'react';
import Button from './UI/button/Button';

const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.number}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btn">
        <Button onClick={() => props.remove(props.post)}>Delete</Button>
      </div>
    </div>
  );
};

export default PostItem;
