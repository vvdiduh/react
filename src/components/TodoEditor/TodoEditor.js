import React, { Component } from 'react';
import './TodoEditor.scss';

class TodoEditor extends Component {
  state = { message: '' };
  handleChange = e => {
    this.setState({ message: e.target.value });
  };

  handleSubmit = e => {
    
  }
  render() {
    return (
      <form className="TodoEditor">
        <textarea
          className="TodoEditor__textarea"
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>
        <button type="button" className="TodoEditor__button">
          Save
        </button>
      </form>
    );
  }
}

export default TodoEditor;
