import React from "react";
import "./styles.css";
import Header from "./Components/Header";
import { Switch, Route } from "react-router-dom";
import routes from "./routes/routes";
import Home from "./pages/Home";
import PostPage from "./pages/PostPage";
import NewPost from "./pages/NewPost";
import ErrorBoundary from "./Components/ErrorBoundary";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path={routes.home}>
          <ErrorBoundary>
            <Home />
          </ErrorBoundary>
        </Route>
        <Route path={routes.authors}>
          <h3>Authors</h3>
        </Route>
        <Route path={routes.newPost}>
          <NewPost />
        </Route>
        <Route path={routes.post}>
          <PostPage />
        </Route>
      </Switch>
    </div>
  );
}
