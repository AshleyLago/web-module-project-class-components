import React from 'react'
import Todo from "./Todo.js";

export default class TodoList extends React.Component {
  render() {

    return (
      <ul>
        {this.props.todos.filter(todo => !this.props.hideCompleted || !todo.completed).map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            index={index}
            toggleComplete={this.props.toggleComplete}
          />
        ))}
        {/* This accesses the state items array. It will then filter through those items. If completed is hidden, then it will check if the task is completed;
            if the task is completed it will not show up, and if it is not, it will show up and continue to map. If nothing is hidden, everything will show up
            and it will continue on to map.
            */}
      </ul>
    );
  }
}
