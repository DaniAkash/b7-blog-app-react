import React from "react";
import PropTypes from "prop-types";

const Post = ({ title, author, content }) => {
  return (
    <div className={"container"}>
      <h2>{title}</h2>
      <p>{author}</p>
      <p>{content}</p>
    </div>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Post;
