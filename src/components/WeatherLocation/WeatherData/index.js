import React from 'react';
import PropTypes from 'prop-types';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

const WeatherData = ({data: {temperature, weatherState, humidity, wind}}) => {
	var jsx = 	<div className = 'weatherDataCont'>
					<WeatherTemperature 
						temperature = {temperature}
						weatherState = {weatherState}
					/>
					<WeatherExtraInfo humidity = {humidity} wind = {wind}/>
				</div>;
	return jsx;
};

WeatherData.propTypes = {
	data: PropTypes.shape ({
		weatherState: PropTypes.string.isRequired,
		temperature: PropTypes.number.isRequired,
		humidity: PropTypes.number.isRequired,
		wind: PropTypes.string.isRequired,
	}),
};

export default WeatherData;