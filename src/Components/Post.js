import React from "react";

const Post = ({ title, author, content }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{author}</p>
      <p>{content}</p>
    </div>
  );
};

export default Post;
