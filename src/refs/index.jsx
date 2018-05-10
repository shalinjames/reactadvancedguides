import React, { Component } from "react";
import CreateAndAccess from "./createAndAccess";
import FunctionalCompRef from "./functionalCompRef";
import ForwardedRef from "./forwardedRef";

class Refs extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: "" };
    this.textInputRef = React.createRef();
  }
  componentDidMount() {
    this.textInputRef.current.focusTextInput();
  }
  handleTextChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <div className="ref">
        <CreateAndAccess
          inputValue={this.state.inputValue}
          textChange={this.handleTextChange}
        />
        <FunctionalCompRef
          inputValue={this.state.inputValue}
          textChange={this.handleTextChange}
        />
        <ForwardedRef ref={this.textInputRef} />
        <div>{this.state.inputValue}</div>
      </div>
    );
  }
}
//ref={this.textInputRef}
export default Refs;
