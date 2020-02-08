import React, { ReactNode } from "react";

interface P {
  children: ReactNode;
}

interface S {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<P, S> {
  constructor(props: Readonly<P>) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
