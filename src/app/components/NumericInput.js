import React from 'react/addons';

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

  /*
   * @method render
   * @returns {JSX}
   */
  render () {
    return <input type="number" value="1" size="2" />;
  }
}

export default NumericInput;
