import React from "react";
import BlogPostItem from "./BlogPostItem";
import Pagination from "./Pagination";

const BlogPostList = ({ posts }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Excerpt</th>
            <th>Publication Date</th>
            <th>Read More</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <BlogPostItem key={index} post={post} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlogPostList;