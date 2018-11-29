import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import {
	CLOUD,
	CLOUDY,
	SUN,
	NIGHT,
	RAIN,
	SNOW,
	WINDY
} from './../../constants/weathers';

const data = {
	temperature: 20,
	weatherState: SUN,
	humidity: 10,
	wind: '10 m/s'
}

const data2 = {
	temperature: 30,
	weatherState: RAIN,
	humidity: 20,
	wind: '30 m/s'
}

class WeatherLocation extends Component {

	constructor() {
		super();
		this.state = {
			city: 'Buenos Aires, CABA',
			data: data
		};
	}

	handleUpdateClick = () => {
		console.log('test click');

		this.setState({
			city: 'Caracas',
			data: data2
		});
	}

	render() {
		const {city, data} = this.state;
		return (
			<div className = 'weatherLocationCont'>
				<Location city = {city} ></Location>
				<WeatherData data = {data}></WeatherData>
				<button onClick={this.handleUpdateClick}>Actualizar</button>
			</div>
		);
	}
}

// const WeatherLocation = () => {
// 	var jsx = 	<div className = 'weatherLocationCont'>
// 					<Location city = {'Buenos Aires'} ></Location>
// 					<WeatherData data = {data}></WeatherData>
// 				</div>;
// 	return jsx;
// };

// console.log(WeatherLocation);

export default WeatherLocation;