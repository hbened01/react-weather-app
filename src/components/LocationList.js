import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
import './style.css';

const LocationList = ({cities, onSelectedLocation}) => {

    const handleWeatherLocationClick = (city) => {
        console.log(city);
        console.log('handleWeatherLocationClick');
        onSelectedLocation(city);
    }

    const citiesStr = (city) => {
        return  (    
                    <WeatherLocation
                        key = {city} 
                        city = {city}
                        onWeatherLocationClick = {() => handleWeatherLocationClick(city)}/>
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