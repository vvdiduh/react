// import { render } from '@testing-library/react';
import React, { Component } from 'react';
import shortid from 'shortid';
// import Counter from './components/Counter';
// import Dropdown from './components/Dropdown/Dropdown';
// import ColorPicker from './components/ColorPicker';
import TodoList from './components/TodoList';
import TodoEditor from './components/TodoEditor/TodoEditor';
import Filter from './components/ToDoFilter/Filter';
import Modal from './components/Modal';
import IconButton from './components/IconButton';
import { ReactComponent as AddIcon } from './icons/add.svg';
// import Tabs from './components/Tabs/Tabs';
// import tabs from './tabs.json';

// import Clock from './components/Clock';
// import Form from './components/form';
// import initialTodos from './todos.json';

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
    todos: [],
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    // console.log('App componentDidMount');
    const todos = localStorage.getItem('todos');
    const parseTodos = JSON.parse(todos);
    if (parseTodos) {
      this.setState({ todos: parseTodos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;

    if (prevTodos !== nextTodos) {
      localStorage.setItem('todos', JSON.stringify(nextTodos));
    }
  }

  addTodo = text => {
    console.log(text);
    const todo = { id: shortid.generate(), text, completed: false };
    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));

    this.toggleModal();
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

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
    // this.setState({ showModal: !this.state.showModal });
  };

  render() {
    const { todos, filter, showModal } = this.state;
    // const competedTodos = todos.filter(todo => todo.completed);
    const competedTodos = this.calculatedCompletedTodos();
    const visibleTodos = this.getVisibleTodos();
    const toggleModal = this.toggleModal;
    return (
      <>
        {/* <Tabs items={tabs} /> */}
        <IconButton onClick={toggleModal} aria-label="add todo">
          <AddIcon width={40} height={40} fill="white" />
        </IconButton>
        {/* <button type="button" c>
          Open modal
        </button> */}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor onSubmit={this.addTodo} />
          </Modal>
        )}
        {/* <Form onSubmit={this.formSubmitHandler} /> */}
        {/* <h1>Стан Компонента</h1> */}
        {/* <Counter /> */}
        {/* <Dropdown /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}{' '}
        <div>
          <p>Загальна кількість туду:{todos.length}</p>
          <p>Загальна кількість виконаних туду:{competedTodos}</p>{' '}
          <Filter value={filter} onChange={this.chengeFilter} />
        </div>{' '}
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
