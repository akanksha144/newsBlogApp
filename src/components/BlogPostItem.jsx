import React from 'react';
import { Link } from 'react-router-dom';

const BlogPostItem = ({ post, index }) => {
  return (
    <tr>
      <td>{post.title}</td>
      <td>{post.excerpt}</td>
      <td>{new Date(post.publishedAt).toLocaleDateString()}</td>
      <td>
        <Link to={`/post/${index}`}>Read more</Link>
      </td>
    </tr>
  );
};

export default BlogPostItem;