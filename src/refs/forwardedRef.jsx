import React, { Component } from "react";
import withMainComp from "./refHOC";
import Wrapper from "../common/Wrapper";

class CreateAndAccessRefs extends Component {
  constructor(props) {
    super(props);
    this.textInputRef = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }
  focusTextInput = () => {
    this.textInputRef.current.focus();
  };
  render() {
    return (
      <Wrapper>
        <input type="text" ref={this.textInputRef} key="1" />,
        <input
          type="button"
          value="Focus Text on Forwarded Reference"
          onClick={this.focusTextInput}
          key="2"
        />
      </Wrapper>
    );
  }
}

export default withMainComp(CreateAndAccessRefs);
