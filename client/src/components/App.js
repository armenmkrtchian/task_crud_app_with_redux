import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home";

import CreateTrainer from "./Trainer/CreateTrainer";
import CreateLessonsTopics from "./LessonsTopics/CreateLessonsTopics";
import CreateGroupMember from "./GroupMember/CreateGroupMember";
import UpdateStory from "./Trainer/UpdateTrainersTable";
import Layout from "../hoc/Layout/Layout";
// import { NavLink } from "react-router-dom";

// const link1 = { to: "/stories" };
// const link2 = { to: "/stories/add" };
// const link3 = { to: "/stories/edit" };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      items: []
    };
  }
  render() {
    return (
      <div>
        <Layout/>

        <div className="container">
          <div className="row">
            <div className="col-md-12 mx-auto">
              <Switch>
                <Route path="/stories/add-trainer" component={CreateTrainer} />
                <Route
                  path="/stories/add-lessons-topics"
                  component={CreateLessonsTopics}
                />
                <Route
                  path="/stories/add-group-member"
                  component={CreateGroupMember}
                />
                <Route path="/stories/edit" component={UpdateStory} />
                {/* <Route path="/story/:id" component={Story} /> */}
                <Route path="/" component={Home} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
