import React from 'react';
import Article from './Article';

function articleList({ posts }) {
  // const blogList = posts.map((posts) => {
  return (
    <main>
      {posts.map((posts) => {
        return (
          <Article
            key={posts.id}
            title={posts.title}
            data={posts.date}
            preview={posts.preview}
          />
        );
      })}
    </main>
  );
}

export default articleList;
