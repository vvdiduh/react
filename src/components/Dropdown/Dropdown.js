import React, { Component } from 'react';
import './Dropdown.css';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };

  // show = () => {
  //   this.setState({ visible: true });
  // };

  // hide = () => {
  //   this.setState({ visible: false });
  // };

  render() {
    const { visible } = this.state;
    return (
      <div className="Dropdown">
        <button
          type="button"
          className="Dropdown__toggle"
          // onClick={this.show}
          onClick={this.toggle}
        >
          {visible ? 'Приховати' : 'Показати'}
        </button>
        {/* <button
          type="button"
          className="Dropdown__toggle"
          // onClick={this.hide}
          onClick={this.toggle}
        >
          'Приховати'
        </button> */}
        {visible && <div className="Dropdown__menu">Выпадающее меню</div>}
      </div>
    );
  }
}

export default Dropdown;
