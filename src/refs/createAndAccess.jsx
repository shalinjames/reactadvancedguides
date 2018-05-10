import React, { Component } from "react";
import WithMainComp from "./refHOC";

const Wrapper = ({ children }) => children;
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
        <input type="text" ref={this.textInputRef} />,
        <input
          type="button"
          value="Focus Text "
          onClick={this.focusTextInput}
        />
      </Wrapper>
    );
  }
}

export default CreateAndAccessRefs;
