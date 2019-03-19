import React, { Component } from "react";
import * as actionCreators from "./store/actions/index";
import { connect } from "react-redux";

class Add extends Component {
  state = {
    input: ""
  };
  handleAdding = () => {
    this.props.onAdd(this.state.input);
  };

  render() {
    return (
      <div className="form-group col-lg-6 col-12 mx-auto">
        <div className="input-group my-3">
          <input
            className="form-control"
            onChange={e => this.setState({ input: e.target.value })}
            type="text"
          />
          <div className="input-group-append">
            <button
              onClick={this.handleAdding}
              type="button"
              class="btn btn-primary"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAdd: input => dispatch(actionCreators.add(input))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Add);
