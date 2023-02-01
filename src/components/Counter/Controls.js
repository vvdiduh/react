import React from 'react';

const Controls = ({ onIncriment, onDecrement }) => (
  <div className="Counter__controls">
    <button type="button" onClick={onIncriment}>
      Збільшити на 1
    </button>
    <button type="button" onClick={onDecrement}>
      Зменшити на 1
    </button>
  </div>
);

export default Controls;
