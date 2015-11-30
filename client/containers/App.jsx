import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BookingContainer from '../components/Booking/BookingContainer.jsx';
import * as BookActions from '../actions/BookActions.jsx';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(BookActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingContainer);
