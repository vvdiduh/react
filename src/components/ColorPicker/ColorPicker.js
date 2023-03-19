import React, { Component } from 'react';
import classNames from 'classnames';
import './ColorPicker.css';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 1,
  };

  setActiveIndx = index => {
    this.setState({ activeOptionIdx: index });
  };
  makeOptionClassName = index => {
    return classNames('ColorPicker__option', {
      'ColorPicker__option--active ': index === this.state.activeOptionIdx,
    });
    // const optionClasses = ['ColorPicker__option'];

    // if (index === this.state.activeOptionIdx) {
    //   optionClasses.push('ColorPicker__option--active ');
    // }

    // return optionClasses.join(' ');
  };
  render() {
    const { options } = this.props;
    const { activeOptionIdx } = this.state;
    const { label } = options[activeOptionIdx];
    // console.log(activeOptionLabel);
    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Вибраний колір {label}</p>
        <div>
          {options.map(({ label, color }, index) => (
            // const optionClasses = this.makeOptionClassName(index);
            <button
              key={label}
              // className={optionClasses}
              className={this.makeOptionClassName(index)}
              style={{
                backgroundColor: color,
              }}
              onClick={() => this.setActiveIndx(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
