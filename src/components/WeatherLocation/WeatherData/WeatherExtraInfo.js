import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({humidity, wind}) => {
	var jsx = 	<div>
					<span>
							{`${humidity} % - `}
					</span>
					<span>
							{`${wind} wind`}
					</span>
			   	</div>;
	return jsx;
};

WeatherExtraInfo.propTypes = {
	humidity: PropTypes.number.isRequired,
	wind: PropTypes.string.isRequired
};

export default WeatherExtraInfo;