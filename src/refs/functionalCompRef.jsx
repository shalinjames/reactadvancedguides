import React from "react";
import Wrapper from "../common/Wrapper";
import withLogger from "./logger";
import Input from "./input";

const functionalCompRef = props => {
  // const handleClick = () => {
  //     textInputRef.current.focus();
  //   };
  //const textInputRef = React.createRef();
  return <Input {...props} buttonText="Focus functionalCompRef" />;
};

export default withLogger(functionalCompRef);
