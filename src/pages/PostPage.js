import React, { useState, useEffect } from "react";
import Post from "../Components/Post";
import { useParams } from "react-router-dom";

const PostPage = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState({});

  useEffect(() => {
    setIsLoading(true);
    fetch("https://ts5uf.sse.codesandbox.io/posts/" + id)
      .then(response => response.json())
      .then(data => {
        setPost(data.post);
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return "Loading Data...";
  }

  return (
    <Post title={post.title} author={post.author} content={post.content} />
  );
};

export default PostPage;
