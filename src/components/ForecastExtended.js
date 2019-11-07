import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import './style.css';

const renderForecastItemDays = (forecastData) => {
    return ( 
        forecastData.map(
            (forecast) => (
                <ForecastItem
                        key = {`${forecast.weekDay}${forecast.hour}`}
                        weekDay = {forecast.weekDay}
                        hour = {forecast.hour} 
                        data = {forecast.data}>
                </ForecastItem>
            )
        )
    )
};

const renderProgress = () => {
    return (
        <div>
            <h1>Cargando Pronostico extendido...</h1>
            <CircularProgress size = {80} className = "circular-progress"/>
        </div>
    )
};

const forecastExtended = ({city, forecastData}) => (
    <div>
        <h2 className='forecast-title'>Pronóstico extendido para {city}</h2>
        { forecastData ? 
            renderForecastItemDays(forecastData) :
            renderProgress()
        }
    </div>
);

forecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
}

export default forecastExtended;