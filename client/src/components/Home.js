import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="Bubu">
         <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-2">
            <div className="card">
              <div className="card-body">
                <h1 className="Home">You can add.</h1>
                <NavLink to={"/stories/add-trainer"}>
                  <button type="button" className="btn btn-outline-primary">
                    Trainer
                  </button>
                </NavLink>
                <NavLink to={"/stories/add-lessons-topics"}>
                  <button type="button" className="btn btn-outline-primary">
                    Lessons and topics
                  </button>
                </NavLink>
                <NavLink to={"/stories/add-group-member"}>
                  <button type="button" className="btn btn-outline-primary">
                  Internship groups and Internship members
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
     
    );
  }
}

export default Home;
