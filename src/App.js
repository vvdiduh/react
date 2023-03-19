// import { render } from '@testing-library/react';
import React, { Component } from 'react';
import shortid from 'shortid';
// import Counter from './components/Counter';
// import Dropdown from './components/Dropdown/Dropdown';
// import ColorPicker from './components/ColorPicker';
import TodoList from './components/TodoList';
import TodoEditor from './components/TodoEditor/TodoEditor';
import Filter from './components/Filter';
// import Form from './components/form';
import initialTodos from './todos.json';

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
    filter: '',
  };

  addTodo = text => {
    console.log(text);
    const todo = { id: shortid.generate(), text, completed: false };
    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  toggleComleted = todoId => {
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }
    //     return todo;
    //   }),
    // }));
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  chengeFilter = e => {
    // console.log(e);
    this.setState({ filter: e.target.value });
  };

  getVisibleTodos = () => {
    const { todos, filter } = this.state;

    const mormalizeFilter = filter.toLowerCase();
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(mormalizeFilter),
    );
  };

  calculatedCompletedTodos = () => {
    return this.state.todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0,
    );
  };

  render() {
    const { todos, filter } = this.state;
    // const competedTodos = todos.filter(todo => todo.completed);
    const competedTodos = this.calculatedCompletedTodos();
    const visibleTodos = this.getVisibleTodos();
    return (
      <>
        {/* <Form onSubmit={this.formSubmitHandler} /> */}
        {/* <h1>Стан Компонента</h1> */}
        {/* <Counter /> */}
        {/* <Dropdown /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
        <div>
          <TodoEditor onSubmit={this.addTodo} />
          <Filter value={filter} onChange={this.chengeFilter} />
          <p>Загальна кількість туду:{todos.length}</p>
          <p>Загальна кількість виконаних туду:{competedTodos}</p>
        </div>
        <TodoList
          todos={visibleTodos}
          onDeletTodo={this.deleteTodo}
          onToggleCompleted={this.toggleComleted}
        />
      </>
    );
  }
}

export default App;
