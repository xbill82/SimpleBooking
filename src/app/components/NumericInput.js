import React from 'react/addons';
import Button from 'react-bootstrap/lib/Button';

/*
 * @class NumericInput
 * @extends React.Component
 */
class NumericInput extends React.Component {

  /*
   * @method shouldComponentUpdate
   * @returns {Boolean}
   */
  shouldComponentUpdate () {
    return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
  }

  increase() {
    console.log('increasing...');
  }

  decrease() {
    console.log('decreasing...');
  }

  /*
   * @method render
   * @returns {JSX}
   */
  render () {
    return <div class="numeric-input">
        <Button bsStyle="primary" onClick={this.decrease}>-</Button>
        <input type="number" />
        <Button bsStyle="primary" onClick={this.increase}>+</Button>
      </div>;
  }
}

export default NumericInput;
