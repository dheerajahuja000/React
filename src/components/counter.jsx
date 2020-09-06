import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: ["tag1", "tag2", "tag3"],
  };

  render() {
    return (
      <React.Fragment>
        <ul>
          <span className={this.getBadgeClasses()}>{this.getCount()}</span>
          <button
            onClick={this.handleButtonClick}
            className="btn btn-secondary btn-sum"
          >
            Increment
          </button>
        </ul>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge  m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  getCount() {
    return this.state.value === 0 ? "ZERO" : this.state.value;
  }

  handleButtonClick = () => {
   this.setState({count :this.state.value+1});
  };



}

export default Counter;
