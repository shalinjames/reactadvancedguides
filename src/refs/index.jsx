import React, { Component } from "react";
import CreateAndAccess from "./createAndAccess";
import FunctionalCompRef from "./functionalCompRef";
import ForwardedRef from "./forwardedRef";

class Refs extends Component {
  constructor(props) {
    super(props);
    // this.textInputRef = React.createRef();
  }
  componentDidMount() {
    //this.textInputRef.current.focusTextInput();
  }
  render() {
    return (
      <div className="ref">
        <CreateAndAccess />
        <FunctionalCompRef />
        <ForwardedRef />
      </div>
    );
  }
}
//ref={this.textInputRef}
export default Refs;
