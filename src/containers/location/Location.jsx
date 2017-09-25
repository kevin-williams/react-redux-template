import React, { Component } from 'react';
import { connect } from 'react-redux';

import ZipCode from '../../components/ZipCode';
import { updateZip } from './locationActions';

import styles from './Location.scss';

const mapStateToProps = (state) => state;

@connect(mapStateToProps, { updateZip })
export default class Location extends Component {

    render() {

        return (
            <div className="detail-body">
                <ZipCode location={this.props.location} updateZip={this.props.updateZip}/>
                <button onClick={() => this.props.history.goBack()} >Back</button>
            </div>
        );
    }

}