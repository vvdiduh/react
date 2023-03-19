import React, { Component } from 'react';

class Form extends Component {
  state = { name: '', surname: '', expirions: 'junior', agree: false };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  handleAgreeChenge = e => {
    console.log(e.target.checked);
    this.setState({ agree: e.target.checked });
  };

  reset = () => {
    this.setState({ name: '', surname: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name{' '}
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Surname{' '}
          <input
            type="text"
            name="surname"
            value={this.state.surname}
            onChange={this.handleChange}
          />
        </label>
        <p>You skills:</p>
        <label>
          junior
          <input
            type="radio"
            name="expirions"
            value="junior"
            onChange={this.handleChange}
            checked={this.state.expirions === 'junior'}
          />
        </label>
        <label>
          middle
          <input
            type="radio"
            name="expirions"
            value="middle"
            onChange={this.handleChange}
            checked={this.state.expirions === 'middle'}
          />
        </label>
        <label>
          senior
          <input
            type="radio"
            name="expirions"
            value="senior"
            onChange={this.handleChange}
            checked={this.state.expirions === 'senior'}
          />
        </label>
        <label>
          <input
            type="checkbox"
            name="agree"
            checked={this.state.agree}
            onChange={this.handleAgreeChenge}
          />{' '}
          I agree
        </label>
        <button type="submit" disabled={!this.state.agree}>
          Send
        </button>
      </form>
    );
  }
} 

export default Form;
