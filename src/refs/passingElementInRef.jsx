import React, { Component } from "react";
import Wrapper from "../common/Wrapper";

class PassingElementRef extends Component {
  constructor(props) {
    super(props);
    this.textInputElement = null;
  }

  onFocusClick = () => {
    this.textInputElement.focus();
  };

  render() {
    return (
      <Wrapper>
        <input type="text" ref={element => (this.textInputElement = element)} />
        <input
          type="button"
          onClick={this.onFocusClick}
          value="Focus Passing Elemenet Reference"
        />
      </Wrapper>
    );
  }
}

export default PassingElementRef;
