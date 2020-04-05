import React, { Fragment, useState } from "react";
import Post from "../Components/Post";
import postData from "../mockData/postData";

const Home = () => {
  const [posts, setPosts] = useState(postData);

  return (
    <Fragment>
      {posts.map((post, postIndex) => {
        return (
          <Post
            title={post.title}
            author={post.author}
            content={post.content}
            key={postIndex}
          />
        );
      })}
    </Fragment>
  );
};

export default Home;
