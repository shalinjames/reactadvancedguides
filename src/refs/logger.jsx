import React, { Component } from "react";

//higher order component for Refs
const withLogger = CompToBeWrapped => {
  class Logger extends Component {
    componentDidUpdate(prevProps) {
      console.log("Old Props", prevProps);
      console.log("New Props", this.props);
    }
    render() {
      const { forwardedRef, ...props } = this.props;
      return <CompToBeWrapped ref={forwardedRef} {...props} />;
    }
  }

  return React.forwardRef((props, ref) => (
    <Logger {...props} forwardedRef={ref} />
  ));
};

export default withLogger;
