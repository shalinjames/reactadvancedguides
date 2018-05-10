import React, { Component } from "react";

class Refs extends Component {
  constructor(props) {
    super(props);
    this.textInputRef = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }
  focusTextInput = () => {
    this.textInputRef.current.focus();
  };
  render() {
    return [
      <input type="text" ref={this.textInputRef} />,
      <input type="button" value="Focus Text " onClick={this.focusTextInput} />
    ];
  }
  componentDidMount() {
    this.textInputRef.current.focus();
  }
}

export default Refs;
