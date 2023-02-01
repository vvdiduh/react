import React from 'react';
import './TodoList.css';
const TodoList = ({ todos, onDeletTodo }) => (
  <ul className="TodoList">
    {todos.map(({ id, text }) => (
      <li key={id} className="TodoList__item">
        <p className="TodoList__text">{text}</p>
        <button onClick={() => onDeletTodo(id)}>delet</button>
      </li>
    ))}
  </ul>
);

export default TodoList;
