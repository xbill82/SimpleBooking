import Dispatcher from '../Dispatcher';
import Events from 'events';
import Constants from '../constants/BookingConstants';

var CHANGE_EVENT = 'change';

var _bookings = {
	participants: 3
};

function _setParticipants(value) {
	_bookings.participants = value;
}

function _increaseParticipants() {
	_setParticipants(_bookings.participants + 1);
}

class BookingStore extends Events.EventEmitter {

	getBookings() {
		return _bookings;
	}

	emitChange() {
		this.emit(CHANGE_EVENT);
	}
	/**
	 * @param {function} callback
	 */
	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	}

	/**
	 * @param {function} callback
	 */
	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}
}

var store = new BookingStore();

Dispatcher.register(action => {
	switch (action.actionType) {
		case Constants.INCREASE_PARTICIPANTS:
			_increaseParticipants()
			store.emitChange();
			break;
	};

	return true;
});

export default store;