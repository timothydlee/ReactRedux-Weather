import axios from 'axios';

const API_KEY = 'bb61a65b93ef3c90ce9e848233cd0b80';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

//User will pass in string of 'city'
export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us&units=imperial`;
	const request = axios.get(url);
	return {
		type: FETCH_WEATHER,
		payload: request
	};
}