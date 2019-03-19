import React, { Component } from "react";

// Components
import Add from "./Add";
import WMovieTable from "./WMovieTable";
import LMovieTable from "./LMovieTable";

class App extends Component {
  render() {
    return (
      <div id="app" className="container">
        <Add />
        <div className="row">
          <div className="col-6">
            <LMovieTable />
          </div>
          <div className="col-6">
            <WMovieTable />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
