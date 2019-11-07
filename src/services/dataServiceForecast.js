import moment from 'moment';
import 'moment/locale/es';
import transformWeather from './dataServiceWeather';

const transformForecast = (data) => {
    return (
        data.list.filter(item => (
                moment.unix(item.dt).utc().hour() === 0  ||
                moment.unix(item.dt).utc().hour() === 6  ||
                moment.unix(item.dt).utc().hour() === 12 ||
                moment.unix(item.dt).utc().hour() === 18
            )
        ).map((item, key) => ({
            weekDay: moment.unix(item.dt).utc().format('dddd'),
            hour: moment.unix(item.dt).utc().hour(),
            data: transformWeather(item)
        })) 
    );
}

export default transformForecast;