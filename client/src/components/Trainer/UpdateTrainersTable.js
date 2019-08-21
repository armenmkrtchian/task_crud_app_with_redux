import React, { Component } from "react";
import { getList, addItem, deleteItem, updateItem } from "./TrainerFunctions";

class UpdateStory extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      name: "",
      surname : "",
      email: "",
      password: "",
      arttitle: "",
      artbody: "",
      editDisabled: false,
      items: []
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.getAll();
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  getAll = () => {
    getList().then(data => {
      this.setState(
        {
          name: "",
          surname: "",
          email: "",
          password: "",
          items: [...data]
        },
        () => {
          console.log(this.state.items);
        }
      );
    });
  };

  onSubmit = e => {
    e.preventDefault();
    addItem(this.state.name, this.state.surname, this.state.email, this.state.password).then(() => {
      this.getAll();
    });
    this.setState({
      name: "",
      surname: "",
      email: "",
      password: ""
    });
  };

  onUpdate = e => {
    e.preventDefault();
    updateItem(this.state.name, this.state.id, this.state.surname, this.state.email, this.state.password).then(
      () => {
        this.getAll();
      }
    );
    this.setState({
      editDisabled: ""
    });
  };

  onEdit = (itemid, e) => {
    e.preventDefault();

    var data = [...this.state.items];
    data.forEach((item, index) => {
      if (item.id === itemid) {
        this.setState({
          id: item.id,
          name: item.name,
          surname: item.surname,
          editDisabled: true
        });
      }
    });
  };

  onDelete = (val, e) => {
    e.preventDefault();
    deleteItem(val);

    var data = [...this.state.items];
    data.filter(function(item, index) {
      if (item.id === val) {
        data.splice(index, 1);
      }
      return true;
    });
    this.setState({ items: [...data] });
  };

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card card-default">
            <div className="card-header">
              <div className="card-body">
                {this.state.editDisabled ? (
                  <form onSubmit={this.onSubmit}>
                    <h1>Update trainer's information</h1>
                    <div className="form-group">
                      <label htmlFor="name" />
                      <div className="row">
                        <div className="col-md-12">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Name"
                            name="name"
                            value={this.state.name || ""}
                            onChange={this.onChange.bind(this)}
                          />
                        </div>

                        <div className="col-md-12">
                          <textarea
                            name="surname"
                            id="surname"
                            placeholder="Surname"
                            value={this.state.surname || ""}
                            className="form-control"
                            onChange={this.onChange.bind(this)}
                          />
                        </div>
                        <div className="col-md-12">
                          <input
                            type="text"
                            className="form-control"
                            id="email"
                            placeholder="Email"
                            name="email"
                            value={this.state.email || ""}
                            onChange={this.onChange.bind(this)}
                          />
                        </div>
                        <div className="col-md-12">
                          <input
                            type="text"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            name="password"
                            value={this.state.password || ""}
                            onChange={this.onChange.bind(this)}
                          />
                        </div>
                      </div>
                    </div>
                    {!this.state.editDisabled ? (
                      <button
                        type="submit"
                        onClick={this.onSubmit.bind(this)}
                        className="btn btn-success btn-block"
                      >
                        Submit
                      </button>
                    ) : (
                      ""
                    )}
                    {this.state.editDisabled ? (
                      <button
                        type="submit"
                        onClick={this.onUpdate.bind(this)}
                        className="btn btn-primary btn-block"
                      >
                        Update
                      </button>
                    ) : (
                      ""
                    )}
                  </form>
                ) : null}
              </div>
            </div>
          </div>
          <table className="table">
          
            <tbody>
              <tr>
            <th scope="col">Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
         </tr>
              {this.state.items.map((item, index) => (
                <tr key={index}>
                  <td className="text-left">{item.title}</td>
                  <td className="text">{item.surname}</td>
                  <td className="text">{item.email}</td>
                  <td className="text">{item.password}</td>
                  <td className="text-right">
                    <button
                      href=""
                      className="btn btn-info mr-1"
                      disabled={this.state.editDisabled}
                      onClick={this.onEdit.bind(this, item.id)}
                    >
                      Edit
                    </button>
                    <button
                      href=""
                      className="btn btn-danger"
                      disabled={this.state.editDisabled}
                      onClick={this.onDelete.bind(this, item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default UpdateStory;
