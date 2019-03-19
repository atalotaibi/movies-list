import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "./store/actions/index";

class LMovieRow extends Component {
  render() {
    const movie = this.props.movie;
    console.log(this.props.movie);
    return (
      <tr>
        <td>{movie}</td>
        <td>
          <button
            onClick={() => {
              this.props.onWatch(movie);
              this.props.onDeleteFromList(movie);
            }}
            class="btn btn-primary"
          >
            Watch
          </button>
        </td>
        <td>
          <button
            onClick={() => {
              this.props.onDeleteFromList(movie);
            }}
            class="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onWatch: data => dispatch(actionCreators.watch(data)),
    onDeleteFromList: data => dispatch(actionCreators.deleteFromList(data))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LMovieRow);
