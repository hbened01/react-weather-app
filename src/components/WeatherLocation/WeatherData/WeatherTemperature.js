import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcons from 'react-weathericons';
import {
	CLOUD,
	CLOUDY,
	SUN,
	NIGHT,
	RAIN,
	SNOW,
	WINDY
} from './../../../constants/weathers.js';

// Se crea diccionario:
const icons = {
	[CLOUD]:'cloud',
	[CLOUDY]:'cloudy',
	[SUN]:'day-sunny',
	[NIGHT]:'night-clear',
	[RAIN]:'rain',
	[SNOW]:'snow',
	[WINDY]:'windy'
};

const getWeatherIcon = weatherState => {
	const icon = icons[weatherState];
	if (icon)
		return <WeatherIcons name = {icon} size = '2x'/>;
	else
		return <WeatherIcons name = 'day-sunny' size = '2x'/>;
};

const WeatherTemperature = ({temperature, weatherState}) => ( 
	<div>
		<span>
				{
					getWeatherIcon(weatherState)	
				}
		</span>
		<span>
				{
					`${temperature} C°`
				} 
		</span>
	</div>
);

WeatherTemperature.propTypes = {
	weatherState: PropTypes.string.isRequired,
	temperature: PropTypes.number.isRequired
};

export default WeatherTemperature;