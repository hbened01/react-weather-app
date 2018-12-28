import React, { Component } from 'react';
import PropTypes from 'prop-types';

 class forecastExtended extends Component {
    // constructor(...args){
    //         super(...args);
    // }
    render(){
        // const {} = this.props;
        const { city } = this.props;
        return (
            <div> Pronostico extendido de {city}</div>
        );
    }
}

forecastExtended.propTypes = {
    city: PropTypes.string.isRequired
}

export default forecastExtended;
