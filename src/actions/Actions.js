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

	getProducts(category) {
		Dispatcher.dispatch({
			type: ActionTypes.GET_PRODUCTS,
			payload: category,
		});
	},

	getShops(product) {
		Dispatcher.dispatch({
			type: ActionTypes.GET_SHOPS,
			payload: product,
		});
	},
};

export default Actions;
