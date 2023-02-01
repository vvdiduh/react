import React from 'react';
import Controls from './Controls';
import Value from './Value';
import './Counter.css';

class Counter extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     value: 5,
  //   };
  // }

  static defaultProps = {
    initialValue: 7,
  };

  static propTypes = {
    //
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    // this.setState({
    //   value: this.state.value + 1,
    // });   перезаписуємо поверху
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };
  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };
  render() {
    const { value } = this.state;
    return (
      <div className="Couner">
        <Value value={value} />
        <Controls
          onIncriment={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
