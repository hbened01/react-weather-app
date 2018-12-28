import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes } from 'prop-types';
import getListByCity from './../../services/getUrlWeatherByCity';
import Location from './Location';
import WeatherData from './WeatherData';
import dataService from './../../services/dataServiceWeather';

class WeatherLocation extends Component {

	constructor(props) {
		super(props);
		const { city } = props;
		this.state = {
			city,
			data: null
		};
		// console.log('constructor');
	}

	componentDidMount() {
		this.handleUpdateClick();
		// console.log('componentDidMount');
	}
	
	componentDidUpdate(prevProps, prevState) {
		// console.log('componentDidUpdate');api_weather
	}

	handleUpdateClick = () => {
		//	SE TRAEN LOS DATOS DE LA URL:
		const api_weather = getListByCity(this.state.city);
		fetch(api_weather).then( resolve => {
			return resolve.json();
		} ).then( data => {
			// console.log('resultado api');
			const newWeather = dataService(data);
			// console.log(newWeather);
			this.setState({
				data: newWeather
			});
			// debugger;
		} );
	}

	render() {
		// console.log('render');
		const {onWeatherLocationClick} = this.props;
		const {city, data} = this.state;
		return (
			<div className = 'weatherLocationCont' onClick={onWeatherLocationClick}>
				<Location city = {city}></Location>
				{ data ? 
						<WeatherData data = {data}></WeatherData> :
						<CircularProgress size = {80}/>
				}
				{/*<button onClick={this.handleUpdateClick}>Actualizar</button>*/}
			</div>
		);
	}
}

WeatherLocation.propTypes = {
	city: PropTypes.string.isRequired,
	onWeatherLocationClick: PropTypes.func
};

export default WeatherLocation;