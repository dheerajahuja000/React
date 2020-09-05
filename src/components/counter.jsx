import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  render() {
    let classes = this.getBadgeClasses();

    return (
      <React.Fragment>
        <span className={classes}>{this.getCount()}</span>
        <button
          className="btn btn-secondary btn-sum"
         
        >
          Increment
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge  m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  getCount() {
    return this.state.count === 0 ? "ZERO" : this.state.count;
  }


}

export default Counter;
