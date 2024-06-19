import React from 'react'

/*
Each todo, rather, each item on the list looks like this:
  index: INDEX IN THE ARRAY
  todo: {completed: TRUE OR FALSE, item: "NAME HERE"}
    completed: TRUE OR FALSE
    item: "NAME HERE"
    new entry: ""
  toggleComplete: ƒ toggleComplete() {}
  new entry: ""
*/

export default class Todo extends React.Component {
  render() {
    return (
      <li onClick={() => this.props.toggleComplete(this.props.index)} >
        {this.props.todo.task} {/* Displays the name of the tasks in the items state */}
        <span >{this.props.todo.completed ? '✔' : ''}</span> {/* Adds a check if those taks are completed */}
      </li>
    );
  }
}