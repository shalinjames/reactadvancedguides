import React from "react";
import Wrapper from "../common/Wrapper";
import withLogger from "./logger";
import Input from "./input";

const functionalCompRef = props => {
  return <Input {...props} buttonText="Focus functionalCompRef" />;
};

export default withLogger(functionalCompRef);
