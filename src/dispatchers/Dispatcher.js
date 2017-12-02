import { Dispatcher } from 'flux';

class OurDispatcher extends Dispatcher {
	dispatch(action= {}) {
		console.log('Dispatched', action);
		super.dispatch(action);
	}
}

export default new OurDispatcher();