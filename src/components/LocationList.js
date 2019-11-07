import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
import './style.css';

const LocationList = ({cities, onSelectedLocation}) => {

    const handleWeatherLocationClick = (city) => {
        onSelectedLocation(city);
    }

    const citiesStr = (city) => {
        return  (    
                    <WeatherLocation
                        key = {city.key} 
                        city = {city.name}
                        onWeatherLocationClick = {() => handleWeatherLocationClick(city)}
                        data = {city.data}
                    />
                );
    };
     
    const convertArrayToString = (cities) => (
        cities.map( citiesStr )
    );

    return  (
                <div className='locationList'>
                    {convertArrayToString(cities)}
                </div>
            );
};

LocationList.propTypes = {
    cities:PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func
}

export default LocationList;