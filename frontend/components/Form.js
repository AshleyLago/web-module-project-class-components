import React from 'react'

// Instead of saying "this.props." for everything, I could have said "const { input, handleChange, etc } = this.props;" in between "render(){" and "return{":
// and then gone "value={input}" and "onChange={handleChange}" and so on

export default class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input
          type="text"
          value={this.props.input}
          onChange={this.props.handleChange}
          placeholder="Type todo"
        />
        <button type="submit">Submit</button>
        <br /> <br /> {/* Add the space in between the submit and completed buttons */}
        <button onClick={this.props.toggleHideCompleted}>
          {this.props.hideCompleted ? 'Show Completed' : 'Hide Completed'}
        </button> {/* Depending on if the hideCompleted state is true or false, the button's name will change */}
      </form>
    );
  }
}