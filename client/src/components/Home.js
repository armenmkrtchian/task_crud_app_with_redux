import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-2">
            <div className="card">
              <div className="card-body">
                <h1 className="Home">You can create beautiful stories!</h1>
                <NavLink to={"/stories/add"}>
                  <button type="button" className="btn btn-outline-primary">
                    Create Stories
                  </button>
                </NavLink>
                <NavLink to={"/stories"}>
                  <button type="button" className="btn btn-outline-secondary">
                    Stories
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
