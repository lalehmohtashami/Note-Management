import React from "react";

export default class Input extends React.Component {
  state = {
    value: ""
  };

  onChange = e => this.setState({ value: e.target.value });

  add = () => {
    this.props.handleAdd(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="New Note..."
          value={this.state.value}
          onChange={this.onChange}
        />

        <button onClick={this.add}>Add Nate</button>
      </div>
    );
  }
}
