import React from 'react/addons';
import Button from 'react-bootstrap/lib/Button';

/*
 * @class NumericInput
 * @extends React.Component
 */
class NumericInput extends React.Component {

  constructor() {
    super();
    this.state = this.getInitialState();
  }

  /*
   * @method shouldComponentUpdate
   * @returns {Boolean}
   */
  shouldComponentUpdate() {
    return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
  }

  getInitialState() {
    return {
      value: 1
    }
  }

  // update() {
  //   this.setState({
  //     value: 1
  //   })
  // }

  increase() {
    console.log('increasing...');
    this.state.value++;
  }

  decrease() {
    console.log('decreasing...');
    this.state.value--;
  }

  /*
   * @method render
   * @returns {JSX}
   */
  render () {
    return <div class="numeric-input">
        <Button bsStyle="primary" onClick={this.decrease}>-</Button>
        <input type="number" value={this.state.value} />
        <Button bsStyle="primary" onClick={this.increase}>+</Button>
      </div>;
  }
}

export default NumericInput;
