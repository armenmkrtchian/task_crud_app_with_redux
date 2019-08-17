import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Story extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">Some beautiful story...</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <NavLink to={"/stories"}>
            <span className="btn btn-primary">Go to stories</span>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Story;
