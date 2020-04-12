import React, { Fragment, useState, useEffect } from "react";
import Post from "../Components/Post";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import routes from "../routes/routes";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch("https://ts5uf.sse.codesandbox.io/posts")
      .then(response => response.json())
      .then(data => {
        setPosts(data.posts);
      })
      .catch(console.error);
  }, []);

  return (
    <Fragment>
      {posts.map((post, postIndex) => {
        const onReadMore = () => {
          history.push(routes.post.replace(":id", post.id));
        };

        return (
          <Fragment key={postIndex}>
            <Post
              title={post.title}
              author={post.author.name}
              content={post.content}
              isOnlySummary
            />
            <div className={"container"}>
              <Button onClick={onReadMore} color={"primary"}>
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
