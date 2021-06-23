import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [{title: "Nadir", edit : true},{title: "Nadir", edit : false}],
      value: "",
    };
  }
  add_todo = () => {
    let obj = {title: this.state.value}
    this.setState({
      todos: [...this.state.todos, obj],
      value: ""
    });
    console.log(this.state.todo);
  };
  del_todo = (ind) => {
    this.state.todos.splice(ind,1)
    this.setState({
      todos: this.state.todos
    })
  }
  deleteAll = () =>{
    this.setState({
      todos: [{}]
    })
  }
  edit_todo = (index) =>{
    this.state.todos[index].edit = true;
    this.setState({
      todos: this.state.todos
    })
    // var update_value = prompt('Edit task');
    // this.state.todos[index] = update_value;
    // this.setState({
    //   todos: this.state.todos
    // });
  }
    handleChange = (e,index) =>{
      // console.log(e.target.value,index)
    this.state.todos[index].title = e.target.value
    }

    update_todo = (index) => {
      this.state.todos[index].edit = false;
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
        <button onClick={this.deleteAll}>Delete All</button>
        <ul>
          {todos.map((val, ind) => {
            return <li key={ind}> 
            {val.edit ?
             <input  type = "text" onChange = {(e) => this.handleChange(e,ind)} /> 
            :
             val.title}
            {val.edit ?
              <button onClick = {() => this.update_todo(ind)}>Update</button>
              :
              <button onClick = {() => this.edit_todo(ind,val.title)}>Edit</button>
            }
            <button onClick = {() => this.del_todo(ind)}>Delete</button>
             </li>
          }
          )}
        </ul>
      </div>
    );
  }
}

export default App;
