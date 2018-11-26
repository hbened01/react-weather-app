import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import {
	CLOUD,
	// CLOUDY,
	// SUN,
	// NIGHT,
	// RAIN,
	// SNOW,
	// WINDY
} from './../../../constants/weathers';

const WeatherData = () => {
	var jsx = 	<div>
					<WeatherTemperature 
						temperature = {30}
						weatherState = {CLOUD}
					/>
					<WeatherExtraInfo humidity = {80} wind = {'10 m/s'}/>
				</div>;
	return jsx;
};

export default WeatherData;