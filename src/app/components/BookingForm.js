import React from 'react/addons';
import NumericInput from './NumericInput';

/*
 * @class BookingForm
 * @extends React.Component
 */
class BookingForm extends React.Component {

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
    return <div className="booking-form">
      <div class="step">Bienvenue {this.props.user.name}!</div>
      <div class="step">On est contents que tu viennes!</div>
      <div class="step">Pour combien de personnes veux-tu réserver?</div>
      <NumericInput/>
      <div class="step">As-tu quelque chose de plus à nous dire?</div>
      <textarea placeholder="Tu peux nous le dire ici!"></textarea>
    </div>;
  }
}

// Prop types validation
BookingForm.propTypes = {
  user: React.PropTypes.object.isRequired,
};

export default BookingForm;
