import React, { Component } from "react";
import { addItem, getList } from "../ListFunctions";
import { NavLink } from "react-router-dom";

class CreateStory extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      title: "",
      description: "",
      editDisabled: false,
      items: []
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit = e => {
    e.preventDefault();
    addItem(this.state.title, this.state.description).then(() => {
      this.getAll();
    });
    this.setState({
      title: "",
      description: ""
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
          title: "",
          description: "",
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
                <h1>Create story</h1>
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <label htmlFor="title" />
                      <div className="row">
                        <div className="col-md-12">
                          <input
                            type="text"
                            className="form-control"
                            id="title"
                            placeholder="Title"
                            name="title"
                            value={this.state.title || ""}
                            onChange={this.onChange.bind(this)}
                          />
                        </div>

                        <div className="col-md-12">
                          <textarea
                            name="description"
                            id="description"
                            placeholder="Description"
                            value={this.state.description || ""}
                            className="form-control"
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

export default CreateStory;
