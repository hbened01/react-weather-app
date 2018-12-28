import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const WeatherExtraInfo = ({humidity, wind}) => {
	var jsx = 	
				<div className = 'weatherExtraInfoCont'>
					<span id = 'humidityCont'>
							{`humedad: ${humidity} %.`}
					</span>
					<span id = 'windCont'>
							{`viento: ${wind}.`}
					</span>
			   	</div>;
	return jsx;
};

WeatherExtraInfo.propTypes = {
	humidity: PropTypes.number.isRequired,
	wind: PropTypes.string.isRequired
};

export default WeatherExtraInfo;