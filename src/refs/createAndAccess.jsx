import React, { Component } from "react";
import withLogger from "./logger";
import Input from "./input";

class CreateAndAccessRefs extends Component {
  render() {
    return <Input {...this.props} buttonText="Focus Create And Access Refs" />;
  }
}

export default withLogger(CreateAndAccessRefs);
