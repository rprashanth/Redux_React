import Axios from 'axios'

const API_KEY = "a066e0ecd45ba62228745de1e5b004b6";
const Root_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city){
	const url = `${Root_URL}&q=${city},us`;
	const request = Axios.get(url)
	return {
		type: FETCH_WEATHER,
		payload: request
	}
}