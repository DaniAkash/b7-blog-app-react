import React from "react";
import PropTypes from "prop-types";

const Post = ({ title, author, content, isOnlySummary = false }) => {
  return (
    <div className={"container"}>
      <h2>{title}</h2>
      <p>{author?.name ?? "Author name not found"}</p>
      <p>{isOnlySummary ? content.substr(0, 80) + "..." : content}</p>
    </div>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  content: PropTypes.string.isRequired,
  isOnlySummary: PropTypes.bool
};

export default Post;
