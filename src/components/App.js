import React from "react";
import "./App.scss";

import Input from "./Input";
import Notes from "./Notes";

class App extends React.Component {
  state = {
    notes: []
  };

  handleAdd = text => {
    this.setState(state => ({
      notes: [
        {
          id: state.notes.length + 1,
          text
        },
        ...state.notes
      ]
    }));
  };

  handleEdit = newNote => {
    this.setState(state => ({
      notes: state.notes.map(note => (note.id === newNote.id ? newNote : note))
    }));
  };

  handleDelete = id => {
    this.setState(state => ({
      notes: state.notes.filter(note => note.id !== id)
    }));
  };

  render() {
    return (
      <div className="App">
        <h2>Note Management</h2>
        <Input handleAdd={this.handleAdd} />
        <Notes
          notes={this.state.notes}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
export default App;
