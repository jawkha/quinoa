import ActionTypes from './ActionTypes';
import Dispatcher from '../dispatchers/Dispatcher';

let Actions = {
	getTags() {
		Dispatcher.dispatch({
			type: ActionTypes.GET_TAGS,
		});
	},

	setActiveTag(tag) {
		Dispatcher.dispatch({
			type: ActionTypes.SET_ACTIVE_TAG,
			payload: tag,
		});
	},

	getCategories(tag) {
		Dispatcher.dispatch({
			type: ActionTypes.GET_CATEGORIES,
			payload: tag,
		});
	},
};

export default Actions;
