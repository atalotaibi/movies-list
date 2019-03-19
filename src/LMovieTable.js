import React, { Component } from "react";
import { connect } from "react-redux";
import LMovieRow from "./LMovieRow";
import LSearchBar from "./LSearchBar";
import "./List.css";

class LMovieTable extends Component {
  render() {
    const movieRows = this.props.list.map(movie => <LMovieRow movie={movie} />);
    return (
      <table className="mt-3 table">
        <p>Movies List</p>
        <div className="numberCircle">{this.props.counter}</div>
        <thead>
          <tr>
            <LSearchBar />
          </tr>
        </thead>
        <tbody>{movieRows}</tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.rootList.lFilter,
    counter: state.rootList.lCounter
  };
};

export default connect(mapStateToProps)(LMovieTable);
