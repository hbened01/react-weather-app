import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';


const WeatherLocation = () => {
	var jsx = 	<div>
					<Location city = {'Buenos Aires'} ></Location>
					<WeatherData></WeatherData>
				</div>;
	return jsx;
};

// console.log(WeatherLocation);

export default WeatherLocation;