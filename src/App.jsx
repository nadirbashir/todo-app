import "./App.css";
import React from "react";
import { List, ListItem, Button, Container,TextField } from "@material-ui/core";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { title: "Nadir", edit: true },
        { title: "Nadir", edit: false },
      ],
      value: "",
    };
  }
  add_todo = () => {
    let obj = { title: this.state.value };
    this.setState({
      todos: [...this.state.todos, obj],
      value: "",
    });
    console.log(this.state.todo);
  };
  del_todo = (ind) => {
    this.state.todos.splice(ind, 1);
    this.setState({
      todos: this.state.todos,
    });
  };
  deleteAll = () => {
    this.setState({
      todos: [{}],
    });
  };
  edit_todo = (index) => {
    this.state.todos[index].edit = true;
    this.setState({
      todos: this.state.todos,
    });
    // var update_value = prompt('Edit task');
    // this.state.todos[index] = update_value;
    // this.setState({
    //   todos: this.state.todos
    // });
  };
  handleChange = (e, index) => {
    // console.log(e.target.value,index)
    this.state.todos[index].title = e.target.value;
    this.setState({
      todos: this.state.todos,
    });
  };

  update_todo = (index) => {
    this.state.todos[index].edit = false;
    this.setState({
      todos: this.state.todos,
    });
  };

  render() {
    let { todos, value } = this.state;
    return (
      <Container fixed className="App">
        <div className = "main">
        <h1>Todo Application</h1>
        {/* add todo section */}
        <div className = "list-item">
          <TextField id="outlined-basic" label="Add todo" variant="outlined" 
            type="text"
            value={value}
            onChange={(e) => this.setState({ value: e.target.value })}
            />
          <Button variant = "outlined" size="small" color = "primary" onClick={this.add_todo}>Add todo</Button>
          
        </div>
        {/* list section */}
        <div className = "list-section">
        <List>
          {todos.map((val, ind) => {
            return (
              <ListItem className = "list-item" key={ind}>
                {val.edit ? (
                  <TextField id="standard-basic" label="Add todo"
                  type="text" value = {val.title}
                    onChange={(e) => this.handleChange(e, ind)}
                    />
                    ) : (
                  <p>{val.title}</p>
                  )}
                {val.edit ? (
                  <Button variant = "outlined" size="small" color = "primary"  onClick={() => this.update_todo(ind)}>Update</Button>
                ) : (
                  <Button variant = "outlined" size="small" color = "primary" onClick={() => this.edit_todo(ind, val.title)}>
                    Edit
                  </Button>
                )}
                <Button variant = "outlined" size="small" color = "secondary" onClick={() => this.del_todo(ind)}>Delete</Button>
              </ListItem>
            );
          })}
        </List>
          </div>
          </div>
      </Container>

      // <Container>
      //   <List>
      //   <ListItem button>List <Button varient = "contained" color="secondary">Enter btn</Button></ListItem>
      //   </List>
      // </Container>
    );
  }
}

export default App;
