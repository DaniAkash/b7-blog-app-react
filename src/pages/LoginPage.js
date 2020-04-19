import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const updateEmail = event => setEmail(event.target.value);
  const updatePassword = event => setPassword(event.target.value);

  const formSubmit = event => {
    event.preventDefault();
    setIsLoading(true);
  };

  return (
    <div className="container">
      <Form onSubmit={formSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            value={email}
            name="email"
            id="exampleEmail"
            placeholder="email placeholder"
            onChange={updateEmail}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            value={password}
            name="password"
            id="examplePassword"
            placeholder="password placeholder"
            onChange={updatePassword}
          />
        </FormGroup>
        <Button>Submit</Button>
        {isLoading ? <p>Loading...</p> : null}
      </Form>
    </div>
  );
};

export default LoginPage;
