import React, { useState } from 'react';
// import ClassCounter from './components/ClassCounter';
// import Counter from './components/Counter';
import PostsList from './components/PostsList';
import './styles/app.css';
import PostForm from './components/PostForm';
import Select from './components/UI/select/Select';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Javascript 2', body: 'Description' },
    { id: 3, title: 'Javascript 3', body: 'Description' },
  ]);

  const [selectedSort, setSelectedSort] = useState('');
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  // Get post from child component

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className="App">
      {/* <Counter />
      <ClassCounter /> */}
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <Select
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="Sort"
        options={[
          { value: 'title', name: 'By name' },
          { value: 'body', name: 'By description' },
        ]}
      />
      {posts.length !== 0 ? (
        <PostsList remove={removePost} posts={posts} title={'JS Posts'} />
      ) : (
        <h1 style={{ textAlign: 'center', marginTop: '25px' }}>No Posts!</h1>
      )}
    </div>
  );
}
export default App;
