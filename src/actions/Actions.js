import QuinoaActionTypes from './ActionTypes';
import QuinoaDispatcher from '../dispatchers/Dispatcher';

let QuinoaActions = {
	getTags() {
		QuinoaDispatcher.dispatch({
			type: QuinoaActionTypes.GET_TAGS,
		});
	},

	setActiveTag(tag) {
		QuinoaDispatcher.dispatch({
			type: QuinoaActionTypes.SET_ACTIVE_TAG,
			payload: tag,
		});
	},

	getCategories(tag) {
		QuinoaDispatcher.dispatch({
			type: QuinoaActionTypes.GET_CATEGORIES,
			payload: tag,
		});
	},

	getProducts(category) {
		QuinoaDispatcher.dispatch({
			type: QuinoaActionTypes.GET_PRODUCTS,
			payload: category,
		});
	},

	getShops(product) {
		QuinoaDispatcher.dispatch({
			type: QuinoaActionTypes.GET_SHOPS,
			payload: product,
		});
	},
};

export default QuinoaActions;
