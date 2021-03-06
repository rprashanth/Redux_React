import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action){
	console.log(state, action)
	switch(action.type){
		case FETCH_WEATHER:
			return state.concat([action.payload.data])
	}
	return state;
}