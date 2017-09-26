import React, { Component } from 'react';

import style from './CityState.scss';

export default class CityState extends Component {

    render() {
        const { location } = this.props;

        let cityState = null;


        if (location.city) {
            cityState = <span>{ location.city }, { location.state }</span>;
        }


        return cityState;
    }
}