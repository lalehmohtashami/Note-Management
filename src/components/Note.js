import React from "react";

export default class Note extends React.Component {
  state = {
    value: this.props.note.text,
    isReadOnly: true
  };

  save = () => {
    this.setState({ isReadOnly: true }, () => {
      const newNote = { id: this.props.note.id, text: this.state.value };
      this.props.handleEdit(newNote);
    });
  };

  render() {
    const { id } = this.props.note;
    const { isReadOnly, value } = this.state;

    return (
      <div>
        <input
          type="text"
          value={value}
          readOnly={isReadOnly}
          onClick={() => this.setState({ isReadOnly: false })}
          onChange={event => this.setState({ value: event.target.value })}
        />

        {!isReadOnly && <button onClick={this.save}>Edit</button>}

        <button onClick={() => this.props.handleDelete(id)}>Delete</button>
      </div>
    );
  }
}
