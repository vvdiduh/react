import React from 'react';
import classNames from 'classnames';
import './TodoList.scss';

const TodoList = ({ todos, onDeletTodo, onToggleCompleted }) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <li
        key={id}
        className={classNames('TodoList__item', {
          'TodoList__item--completed': completed,
        })}
      >
        <input
          type="checkbox"
          className="TodoList__checkbox"
          checked={completed}
          onChange={() => onToggleCompleted(id)}
        />
        <p className="TodoList__text">{text}</p>
        <button onClick={() => onDeletTodo(id)} className="TodoList__btn">
          delet
        </button>
      </li>
    ))}
  </ul>
);

export default TodoList;
