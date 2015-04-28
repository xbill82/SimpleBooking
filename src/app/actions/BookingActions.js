import Dispatcher from '../Dispatcher';
import Constants from '../constants/BookingConstants';

class BookingActions {
	increaseParticipants() {
		Dispatcher.dispatch({
			actionType: Constants.INCREASE_PARTICIPANTS
		});
	}
}

export default new BookingActions();