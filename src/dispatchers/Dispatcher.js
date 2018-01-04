import { Dispatcher } from 'flux';

class QuinoaDispatcher extends Dispatcher {
	dispatch(action= {}) {
		console.log('Dispatched', action);
		super.dispatch(action);
	}
}

export default new QuinoaDispatcher();