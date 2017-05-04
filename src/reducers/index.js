import { combineReducers } from 'redux';
import VideosReducer from "./VideoReducer.js";
import ActiveVideo from "./ActiveVideoReducer.js";

const rootReducer = combineReducers({
	videos: VideosReducer,
	activeVideo: ActiveVideo
});

export default rootReducer;
