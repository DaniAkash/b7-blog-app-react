import React, { Fragment, useState } from "react";
import Post from "../Components/Post";
import postData from "../mockData/postData";
import { Button } from "reactstrap";

const Home = () => {
  const [posts, setPosts] = useState(postData);

  return (
    <Fragment>
      {posts.map((post, postIndex) => {
        return (
          <Fragment key={postIndex}>
            <Post
              title={post.title}
              author={post.author}
              content={post.content}
              isOnlySummary
            />
            <div className={"container"}>
              <Button onClick={() => null} color={"primary"}>
                Read More
              </Button>
            </div>
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default Home;
