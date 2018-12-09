import convert from 'convert-units';
import {
	// CLOUD,
	// CLOUDY,
	// SUN,
	NIGHT,
	// RAIN,
	// SNOW,
	// WINDY
} from './../constants/weathers';

const getTemp = kelvin => {
	return Number(convert(kelvin).from('K').to('C').toFixed(0));
};

const getWeatherState = weather_data => {
	return NIGHT;
};

const dataService = weather_data => {
	const {humidity, temp} = weather_data.main;
	const {speed} = weather_data.wind;
	const weatherState = getWeatherState(weather_data);
	const temperature = getTemp(temp);

	const data = {
		temperature,
		weatherState,
		humidity,
		wind: `${speed} m/s`
	};

	return data;
}

export default dataService;