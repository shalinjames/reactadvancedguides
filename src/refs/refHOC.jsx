import React, { Component } from "react";

//higher order component for Refs
const withMainComp = CompToBeWrapped =>
  class extends Component {
    render() {
      return <CompToBeWrapped {...this.props} />;
    }
  };

export default withMainComp;
