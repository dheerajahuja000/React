import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  render() {
    let classes = "badge  m-2 badge-";
    classes += this.state.count === 0? "warning" : "primary"

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

  getCount() {
    return this.state.count === 0 ? "ZERO" : this.state.count;
  }


}

export default Counter;
