import React, { Component } from "react";

import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { fetchStories, fetchQuizById } from "../redux/actions/stories"

class Stories extends Component {

  componentDidMount() {
    this.props.fetchStories()
    
  }

  clickHandler = (id) => {
     
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Stories</h1>
        <div>
          <ul className="list-group" style={{ listStyleType: "none" }}>
            {this.props.items.map((item, index) => (
              <li 
              key={index}
              className="list-group-item"
              onClick={()=> {this.props.fetchQuizById(item.id)}}
              >
                <NavLink to={"/story/:id"}>{item.title}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      id: state.storiesList.id,
      title: state.storiesList.title,
      description: state.storiesList.description,
      items: state.storiesList.items
  }
}
function mapDispatchToProps(dispatch) {
  return {
    fetchStories: () => dispatch(fetchStories()),
    fetchQuizById: () => dispatch(fetchQuizById())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Stories);
