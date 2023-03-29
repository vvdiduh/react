import React from 'react';
import './TodoFilter.scss';

const Filter = ({ value, onChange }) => {
  return (
    <div className="TodoFilter">
      <label className="TodoFilter__label">
        Filter:{' '}
        <input
          className="TodoFilter__input"
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default Filter;
