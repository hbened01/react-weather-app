import {api_key, url_base} from './../constants/apiUrl'

const url = `${url_base.replace('/weather','/forecast')}`;

const getListForecastByCity = ( city ) => {
    return `${url}?q=${city}&appid=${api_key}`;
}

export default getListForecastByCity;