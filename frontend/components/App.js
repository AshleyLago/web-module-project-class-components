import React from 'react';
import Form from './Form';
import TodoList from './TodoList';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '', // This stores the input recieved from the Type todo box
      items: [], // This stores the list of items that will be inputted by the user
      hideCompleted: false // This holds whether the app will display the completed items
    };
  }

  addItem = (item) => {
    const newItem = { task: item, completed: false }; // This creates newItem which is assigned an object which holds the task inputted, and that it's uncompleted by default
    this.setState((prevState) => ({
      items: [...prevState.items, newItem],
      input: ''
    })); // This adds the newItem to the array list of all the other items, and resets the input to empty
  }; // This handler function will be used in Form.js for when the Submit button is clicked

  toggleComplete = (index) => {
    this.setState((prevState) => {
      const newItems = [...prevState.items];
      newItems[index].completed = !newItems[index].completed;
      return { items: newItems };
    }); // This goes through the objects in the items array, picks out the todo item object that was toggled using its index, and toggles completed to True/False. Then it returns the new array
  }; // This handler function will be used in Todo.js when a list item is clicked

  toggleHideCompleted = () => {
    this.setState((prevState) => ({
      hideCompleted: !prevState.hideCompleted
    })); //Changes hideCompleted in state to True/False
  }; // This handler function will be used in Form.js when the Hide/Show Completed button is clicked

  handleChange = (event) => {
    this.setState({ input: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.input.trim()) {
      this.addItem(this.state.input);
    } // If anything was typed into the input box, it puts whatever was typed into the addItem handler function. Trim() is so that nothing like "       " can be inputted
  }; // This handler function will be used in Form.js on Submit

  // Instead of saying "this." or "this.state." for everything, I could have said "const { items, input, hideCompleted } = this.state;" in between "render(){" and "return{":
  // and then gone "todos={items}" and such. The this.handleChange and whatnot would stay the same regardless
  render() {
    return (
      <div>
        <h2>Todos: </h2>
        <TodoList todos={this.state.items} toggleComplete={this.toggleComplete} hideCompleted={this.state.hideCompleted} />
        {/* Puts the state items hideCompleted and items, and puts in the handler function toggleComplete */}
        <Form
          input={this.state.input}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          toggleHideCompleted={this.toggleHideCompleted}
          hideCompleted={this.state.hideCompleted}
        />
        {/* Puts the state items hideCompleted and input, and puts in the handler functions handleChange, handleSubmit, toggleHideCompleted */}
      </div>
    );
  }
}