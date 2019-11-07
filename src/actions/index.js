import getListForecastByCity from './../services/getUrlForecastByCity';
import getListByCity from './../services/getUrlWeatherByCity';
import transformForecast from './../services/dataServiceForecast';
import transformWeather from './../services/dataServiceWeather';
import { SET_CITY } from './../constants/general';
import { SET_FORECAST_DATA } from './../constants/general';
import { GET_WEATHER_CITY } from './../constants/general';
import { SET_WEATHER_CITY } from './../constants/general';

const setCity = (payload) => ({ type: SET_CITY, payload });
const setForecastData = (payload) => ({ type: SET_FORECAST_DATA, payload });
const getWeatherCity = (payload) => ({ type: GET_WEATHER_CITY, payload });
const setWeatherCity = (payload) => ({ type: SET_WEATHER_CITY, payload });

export { SET_CITY };
export { SET_FORECAST_DATA };
export { GET_WEATHER_CITY };
export { SET_WEATHER_CITY };

export const setSelectedCity = (payload) => {
    return (dispatch, getState) => {
        let value = (typeof payload === 'object') ? payload.name : payload;
        // fetch or axios 
        const api_forecast = getListForecastByCity(value);
        // activar en el estado un indicador de busqueda de datos
        dispatch(setCity(value));

        let state = getState();
        let date = state.cities[payload.name] && state.cities[payload.name].forecastDataDate;
        let now = new Date();

        if (date && (now - date) < (1*60*1000)) {
            return;
        };

        return fetch(api_forecast).then(
            resolve => (resolve.json())
        ).catch(
            error => console.log('Error:', error)
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                // modificar el estado con el resultado de la promise (fetch)
                dispatch(setForecastData({city: value, forecastData}));
            }
        );
    };
};

export const setWeather = (payload) => {
    return dispatch => {
        payload.forEach(city => {
            dispatch(getWeatherCity(city));
            const api_weather = getListByCity(city);
            fetch(api_weather).then( resolve => {
                return resolve.json();
            } ).then( data => {
                const weather = transformWeather(data);
                dispatch(setWeatherCity({city, weather}));
            } );
        });
    }
};
