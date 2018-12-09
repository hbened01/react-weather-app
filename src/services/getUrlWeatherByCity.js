import {api_key, url_base} from './../constants/apiUrl'

const getListByCity = ( city ) => {
    return `${url_base}?q=${city}&APPID=${api_key}`;
}

export default getListByCity;