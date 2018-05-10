import React from "react";
import Wrapper from "../common/Wrapper";

const Input = props => {
  const textInputRef = React.createRef();

  const handleClick = () => {
    textInputRef.current.focus();
  };
  return (
    <Wrapper>
      <input
        type="text"
        value={props.inputValue}
        onChange={props.textChange}
        ref={textInputRef}
      />
      <input type="button" onClick={handleClick} value={props.buttonText} />
    </Wrapper>
  );
};

export default Input;
