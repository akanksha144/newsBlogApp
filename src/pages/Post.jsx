import React from 'react';
import BlogPostDetails from '../components/BlogPostDetail';

const Post = ({ posts }) => {
  return (
    <div>
      <BlogPostDetails posts={posts} />
    </div>
  );
};

export default Post;