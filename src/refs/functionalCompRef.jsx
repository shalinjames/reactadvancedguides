import React from "react";
import Wrapper from "../common/Wrapper";

function functionalCompRef(props) {
  const focusInputText = React.createRef();

  const handleClick = () => {
    focusInputText.current.focus();
  };

  return (
    <Wrapper>
      <input type="text" ref={focusInputText} />,
      <input
        type="button"
        onClick={handleClick}
        value="Focus Functional Component's Click"
      />
    </Wrapper>
  );
}
export default functionalCompRef;
