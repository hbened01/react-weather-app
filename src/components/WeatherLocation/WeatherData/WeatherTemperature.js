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
import './style.css';

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
	const sizeIcon = '4x';
	if (icon)
		return <WeatherIcons id = 'iconCont' name = {icon} size = {sizeIcon}/>;
	else
		return <WeatherIcons id = 'iconCont' name = 'day-sunny' size = {sizeIcon}/>;
};

const WeatherTemperature = ({temperature, weatherState}) => ( 
	<div className = 'weatherTemperatureCont'>
		<span>
				{
					getWeatherIcon(weatherState)	
				}
		</span>
		<span id = 'temperatureGradeCont'>
				{`${temperature}`}
		</span>
		<span id = 'temperatureTypeCont'>
				{` C°`}
		</span>
	</div>
);

WeatherTemperature.propTypes = {
	weatherState: PropTypes.string.isRequired,
	temperature: PropTypes.number.isRequired
};

export default WeatherTemperature;