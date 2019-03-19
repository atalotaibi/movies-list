import React, { Component } from "react";
import { connect } from "react-redux";
import WMovieRow from "./WMovieRow";
import WSearchBar from "./WSearchBar";
import "./List.css";

class WMovieTable extends Component {
  render() {
    const movieRows = this.props.filteredList.map(movie => (
      <WMovieRow movie={movie} />
    ));
    return (
      <table className="mt-3 table">
        <p>Movies List</p>
        <div className="numberCircle">{this.props.counter}</div>
        <thead>
          <tr>
            <WSearchBar />
          </tr>
        </thead>
        <tbody>{movieRows}</tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  return {
    filteredList: state.rootWList.wFilter,
    counter: state.rootWList.wCounter
  };
};

export default connect(mapStateToProps)(WMovieTable);
