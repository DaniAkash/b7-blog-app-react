import React from "react";
import "./styles.css";
import Header from "./Components/Header";
import { Switch, Route } from "react-router-dom";
import routes from "./routes/routes";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path={routes.home}>
          <Home />
        </Route>
        <Route path={routes.authors}>
          <h3>Authors</h3>
        </Route>
        <Route path={routes.newPost}>
          <h3>New Post!</h3>
        </Route>
      </Switch>
    </div>
  );
}
