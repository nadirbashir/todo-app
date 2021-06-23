import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      value: "",
    };
  }
  add_todo = () => {
    this.setState({
      todos: [...this.state.todos, this.state.value],
      value: "",
    });
    console.log(this.state.todo);
  };
  del_todo = (ind) => {
    this.state.todos.splice(ind,1)
    this.setState({
      todos: this.state.todos
    })
  }
  render() {
    let { todos, value } = this.state;
    return (
      <div className="App">
        <input
          type="text"
          value={value}
          onChange={(e) => this.setState({ value: e.target.value })}
        />
        <button onClick={this.add_todo}>Add todo</button>
        <ul>
          {todos.map((val, ind) => {
            return (<li key={ind}> 
            {val} 
            <button onClick = {() => this.del_todo(ind)}>Delete</button>
            </li>
          })}
          )
        </ul>
      </div>
    );
  }
}

export default App;
