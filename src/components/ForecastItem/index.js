import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData';
import './style.css';

const ForecastItem = ({ weekDay, hour, data}) => (
    <div className='forecast-cont'>
        <div className='data-hour-cont'>{weekDay} hora: {`${hour} hs`}</div>
        <WeatherData data = {data}></WeatherData>
    </div>
)

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour:PropTypes.number.isRequired,
    data: PropTypes.shape ({
		weatherState: PropTypes.string.isRequired,
		temperature: PropTypes.number.isRequired,
		humidity: PropTypes.number.isRequired,
		wind: PropTypes.string.isRequired,
	}),
}

export default ForecastItem;