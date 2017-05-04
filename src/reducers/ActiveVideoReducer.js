// State argument is not application state
// Only the state this reducer is responsible for
export default function(state = null /*if argument is undefined, set to null*/, action){

	switch(action.type){
		case "VIDEO_SELECTED":
			return action.payload;
	}

	return state;
}