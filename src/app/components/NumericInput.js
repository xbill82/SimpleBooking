import React from 'react/addons';
import Button from 'react-bootstrap/lib/Button';
import Actions from '../actions/BookingActions';
import Store from '../stores/BookingStore';

/*
 * @class NumericInput
 * @extends React.Component
 */
var NumericInput = React.createClass({

  // constructor(props) {
  //   super(props);
  //   this.state = Store.getBookings();
  //   // this.setState = this.setState.bind(this);
  // }

  /*
   * @method shouldComponentUpdate
   * @returns {Boolean}
   */
  // shouldComponentUpdate() {
  //   return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
  // }

  getInitialState: function() {
    return Store.getBookings();
  },

  _onChange: function() {
    console.log('setting state');
    this.setState(Store.getBookings());
  },

  componentDidMount: function() {
    console.log('Mounting...');
    Store.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    console.log('Unmounting...');
    Store.removeChangeListener(this._onChange);
  },

  increase: function() {
    console.log('increasing...');
    Actions.increaseParticipants();
  },

  decrease: function() {
    console.log('decreasing...');
  },

  /*
   * @method render
   * @returns {JSX}
   */
  render: function() {
    return <div class="numeric-input">
        <Button bsStyle="primary" onClick={this.decrease}>-</Button>
        <input type="number" value={this.state.participants} />
        <Button bsStyle="primary" onClick={this.increase}>+</Button>
      </div>;
  }
});

export default NumericInput;
