import React, { Fragment, useState } from "react";
import Post from "../Components/Post";
import postData from "../mockData/postData";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import routes from "../routes/routes";

const Home = () => {
  const [posts] = useState(postData);
  const history = useHistory();

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
              author={post.author}
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
