import axios from 'axios';
import { EventEmitter } from 'fbemitter';
import QuinoaDispatcher from './../dispatchers/Dispatcher';
import QuinoaActionTypes from './../actions/ActionTypes';

const CHANGE_EVENT = 'change';
let __emitter = new EventEmitter();

let data = {
	tags: [],
	activeTag: "",
	tagMatches: [],
	categoryMatches: [],
	productMatches: []
};

let QuinoaStore = {
	getState() {
		return data;
	},

	addListener(callback) {
		return __emitter.addListener(CHANGE_EVENT, callback);
	},
};

QuinoaStore.dispatchToken = QuinoaDispatcher.register(action => {
	switch (action.type) {
		case QuinoaActionTypes.GET_TAGS:
			axios.get("/home").then(res => {
			console.log(res.data);
			const tags = res.data;
			data.tags = { tags: tags };
		  });
			__emitter.emit(CHANGE_EVENT);
			break;

		case QuinoaActionTypes.SET_ACTIVE_TAG:
			data.activeTag = action.payload.tag;
			__emitter.emit(CHANGE_EVENT);
			break;

		case QuinoaActionTypes.GET_CATEGORIES:
			if (data.activeTag !== ""){
			axios.get(`/${data.activeTag}`).then(res => {
				console.log(res.data);
				const tagMatches = res.data;
				data.tagMatches = tagMatches;
				});
			}
			__emitter.emit(CHANGE_EVENT);
			break;
	}
});

export default QuinoaStore;