// import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';
// import Counter from './components/Counter';
// import Dropdown from './components/Dropdown/Dropdown';
// import ColorPicker from './components/ColorPicker';
import TodoList from './components/TodoList';
import initialTodos from './todos.json';
// import './style.css';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

class App extends Component {
  state = {
    todos: initialTodos,
  };
  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;
    // const competedTodos = todos.filter(todo => todo.completed);
    const competedTodos = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0,
    );
    return (
      <>
        <h1>Стан Компонента</h1>
        {/* <Counter />
    <Dropdown />
    <ColorPicker options={colorPickerOptions} /> */}
        <div>
          <p>Загальна кількість туду:{todos.length}</p>
          <p>Загальна кількість виконаних туду:{competedTodos}</p>
        </div>
        <TodoList todos={todos} onDeletTodo={this.deleteTodo} />
      </>
    );
  }
}

export default App;
