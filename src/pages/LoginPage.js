import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import adminRequests from "../services/adminRequests";
import useAdminProvider from "../store/AdminProvider/useAdminProvider";
import { useHistory } from "react-router-dom";
import routes from "../routes/routes";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { setAdminLoggedIn } = useAdminProvider();
  const history = useHistory();

  const updateEmail = event => setEmail(event.target.value);
  const updatePassword = event => setPassword(event.target.value);

  const formSubmit = event => {
    event.preventDefault();
    setIsLoading(true);
    adminRequests("https://ts5uf.sse.codesandbox.io/admin/login", "POST", {
      email,
      password
    })
      .then(result => {
        if (result.status === "SUCCESS") {
          setAdminLoggedIn();
          // Since we don't have cookes, store jwt in localstorage
          window.localStorage.setItem("jwtToken", result.jwtToken);

          // User Experience
          alert("Successfully loggedIn!");
          history.push(routes.home);
        } else {
          alert("invalid user");
        }
      })
      .catch(e => {
        console.error(e);
        alert("Something went wrong...");
      });
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
