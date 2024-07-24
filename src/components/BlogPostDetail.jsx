
import './BlogPostDetails.css';
import React,{useId} from 'react';
import { Link, useParams } from 'react-router-dom';

const BlogPostDetails = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find((post, index) => index.toString() === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="blog-post-details">
      <h1>{post.title}</h1>
      {post.urlToImage && <img src={post.urlToImage} alt={post.title} />}
      <p>{post.content}</p>
      <p>{post.description}</p>
      <p>Author: {post.author}</p>
      <p>Published at: {new Date(post.publishedAt).toLocaleString()}</p>
      <Link to="/">
        <button>Back to All Posts</button>
      </Link>
    </div>
  );
};

export default BlogPostDetails;