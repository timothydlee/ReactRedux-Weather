import { FETCH_WEATHER } from '../actions/index'; 

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER:
			//HUGE CAN OF WORMS IF YOU DO THIS:
			// return state.push(action.payload.data);
			
			//MUCH BETTER - Doesn't manipulate state - returns new instance of state that contains old instance of state since we want to add cities			
			/*return state.concat([action.payload.data]);*/ //Either works.
			return [ action.payload.data, ...state ] //Either works.
	}

	return state;
}