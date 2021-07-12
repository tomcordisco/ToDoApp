import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Donde se almacenan los datos:
import { todos } from './todos.json';

// El componente para listar tareas:
import TodoForm from './components/TodoForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }
  //function para eliminar un to do
  removeTodo(index) {
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index
      })
    });
  }
  //function para agregar to do
  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">

            <div className="card-title text-center">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill bg-danger ml-2">
                {todo.priority}
              </span>
            </div>

            <div className="card-body">
            <p><mark>{todo.responsible}</mark></p>
              {todo.description}
            </div>

            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeTodo.bind(this, i)}>
                Delete
              </button>
            </div>

          </div>
        </div>
      )
    });

    // Return del componente
    return (
      <div className="App">

        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            Tasks 
            <span className="badge badge-pill bg-light text-dark ml-2">
              {this.state.todos.length}
            </span>
          </a>
        </nav>

        <div className="container">
          <div className="row mt-4">

            <div className="col-md-4 text-center">
                <img src={logo} className="App-logo" alt="logo" />
              <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
            </div>

            <div className="col-md-8">
              <div className="row">
                {todos}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;