import React from 'react';
import IconButton from '../IconButton/IconButton';


const Todo = ({ text, onToggleCompleted, onDelete, completed }) => (
  <>
    <input
      type="checkbox"
      className="TodoList__checkbox"
      checked={completed}
      onChange={onToggleCompleted}
    />
    <p className="TodoList__text">{text}</p>
    <button onClick={onDelete} className="TodoList__btn">
      delet
    </button>
    
  </>
);

export default Todo;
