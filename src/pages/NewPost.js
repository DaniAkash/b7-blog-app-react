import React, { useState } from "react";
import { FormGroup, Label, Input, Form, Button } from "reactstrap";

const NewPost = () => {
  const [authorName, setAuthorName] = useState("");
  const [postText, setPostText] = useState("");
  const [postTitle, setPostTitle] = useState("");

  const onAuthorNameChange = event => setAuthorName(event.target.value);
  const onPostTextChange = event => setPostText(event.target.value);
  const onPostTitleChange = event => setPostTitle(event.target.value);

  const submitForm = async event => {
    event.preventDefault();
    const postData = {
      title: postTitle,
      content: postText,
      author: authorName
    };
    const response = await fetch("https://ts5uf.sse.codesandbox.io/posts", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData)
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="container">
      <Form>
        <FormGroup>
          <Label for="postTitle">Post Title</Label>
          <Input
            type="text"
            name="post title"
            id="postTitle"
            placeholder="Post Title"
            value={postTitle}
            onChange={onPostTitleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="authorName">Author Name</Label>
          <Input
            type="text"
            name="author name"
            id="authorName"
            placeholder="Author's Name..."
            value={authorName}
            onChange={onAuthorNameChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input
            value={postText}
            onChange={onPostTextChange}
            type="textarea"
            name="text"
            id="exampleText"
          />
        </FormGroup>
        <Button type="submit" onClick={submitForm}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default NewPost;
