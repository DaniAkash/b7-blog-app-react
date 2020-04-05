import React, { useState } from "react";
import Post from "../Components/Post";
import { useParams } from "react-router-dom";
import postData from "../mockData/postData";

const PostPage = () => {
  const { id } = useParams();
  const [post] = useState(postData.find(post => post.id === id) || {});

  return (
    <Post title={post.title} author={post.author} content={post.content} />
  );
};

export default PostPage;
