import React, { useState } from "react";
import { FormGroup, Label, Input } from "reactstrap";

const NewPost = () => {
  const [authorName, setAuthorName] = useState("");
  const [postText, setPostText] = useState("");
  const [postTitle, setPostTitle] = useState("");

  const onAuthorNameChange = event => setAuthorName(event.target.value);
  const onPostTextChange = event => setPostText(event.target.value);
  const onPostTitleChange = event => setPostTitle(event.target.value);

  return (
    <div className="container">
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
    </div>
  );
};

export default NewPost;
