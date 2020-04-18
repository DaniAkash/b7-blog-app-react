import React, { Component } from "react";

class ErrorBoundary extends Component {
  static getDerivedStateFromError(error) {
    return {
      isCrashed: true
    };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo);
  }

  state = {
    isCrashed: false
  };

  render() {
    if (this.state.isCrashed) {
      return <h1>Something went wrong! :(</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
