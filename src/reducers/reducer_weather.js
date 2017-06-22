import { FetchWeather } from '../actions/index';

export default function (state = [], action){
	switch(action.type){
		case FetchWeather:
			return state.concat([action.payload.data])
	}
	return state;
}