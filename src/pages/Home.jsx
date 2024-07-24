import React, { useState } from 'react';
import Pagination from '../components/Pagination';
import BlogPostList from '../components/BlogPostList';

const Home = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div>
      <h1>Blog Posts</h1>
      <BlogPostList posts={currentPosts} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
    </div>
  );
};

export default Home;