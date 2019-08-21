import React, { Component } from "react";
import { addItem, getList } from "./LessonsTopicsFunctions";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createStory, finishCreateStory } from '../../redux/actions/createLessonsTopics'

class CreateLessonsTopics extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      lessons: "",
      topics: "",
      link: "",
      editDisabled: false,
      items: []
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit = e => {
    e.preventDefault();
   
    addItem(this.state.lessons, this.state.topics, this.state.link).then(() => {
      this.getAll();
    });
    this.setState({
      lessons: "",
      topics: "",
      link: "",
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  getAll = () => {
    getList().then(data => {
      this.setState(
        {
          lessons: "",
          topics: "",
          link: "",
          items: [...data]
        },
        () => {
          console.log(this.state.items);
        }
      );
    });
  };

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card card-default">
            <div className="card-header">
              <div className="card-body">
                <h1>Create lessons and topics</h1>
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <label htmlFor="title" />
                      <div className="row">
                        <div className="col-md-12">
                          <input
                            type="text"
                            className="form-control"
                            id="lesson"
                            placeholder="Lesson"
                            name="lesson"
                            value={this.state.lesson || ""}
                            onChange={this.onChange.bind(this)}
                          />
                        </div>

                        <div className="col-md-12">
                          <textarea
                            name="topics"
                            id="topics"
                            placeholder="Topics"
                            value={this.state.topics || ""}
                            className="form-control"
                            onChange={this.onChange.bind(this)}
                          />
                        </div>
                        <div className="col-md-12">
                          <input
                            type="text"
                            className="form-control"
                            id="link"
                            placeholder="Link"
                            name="link"
                            value={this.state.link || ""}
                            onChange={this.onChange.bind(this)}
                          />
                        </div>
                      </div>
                    </div>
                      <button
                        type="submit"
                        onClick={this.onSubmit.bind(this)}
                        className="btn btn-light btn-block-sm"
                      >
                          <NavLink to={"/stories"}>Submit</NavLink>
                      </button>
                  </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    id: state.createLessonsTopicsReducer.id,
    lessons: state.createLessonsTopicsReducer.lessons,
    topics: state.createLessonsTopicsReducer.topics,
    link: state.createLessonsTopicsReducer.link,
    items: state.createLessonsTopicsReducer.items
  }
}
function mapDispatchToProps(dispatch) {
  return {
    createStory: item =>dispatch(createStory(item)),
    finishCreateStory: () => dispatch(finishCreateStory())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateLessonsTopics);