export const VIDEO_SELECTED = 'VIDEO_SELECTED';


export function selectVideo(video) {
	// selectBook is an ActionCreator
	// needs to return an action,
	// an object with a type property
	return {
		type: VIDEO_SELECTED,
		payload: video //More information about the action that was taken
	};
}