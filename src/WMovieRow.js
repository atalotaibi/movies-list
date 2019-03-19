import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "./store/actions/index";

class WMovieRow extends Component {
  render() {
    const movie = this.props.movie;
    return (
      <tr>
        <td>{movie}</td>
        <td>
          <button
            onClick={() => {
              this.props.onUnwatch(movie);
              this.props.onDeleteFromWatched(movie);
            }}
            class="btn btn-warning"
          >
            Unwatch
          </button>
        </td>
        <td>
          <button
            onClick={() => {
              this.props.onDeleteFromWatched(movie);
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
    onUnwatch: data => dispatch(actionCreators.unwatch(data)),
    onDeleteFromWatched: data =>
      dispatch(actionCreators.deleteFromWatched(data))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(WMovieRow);
