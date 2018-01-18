import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/*
import {
    foisMapUpdatePointOk
} from './foisMapAction';*/

/*
Moving the location of a coordinate shal be made like this:
https://jsfiddle.net/xvz86tf7/

Keeping the current vertex in the center of the screen
*/

import {
    geometryAdded,
    geometryChanged,
} from './mapAction';

import MapComponent from './mapComponent';

class Mappa extends Component {

    render() {
        return(
            <MapComponent
                {...this.props}/>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        core_map: state.core_map,
        fois: state.fois,
        ...ownProps
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch: dispatch,
        geometryAdded: (type, geom) => {
            dispatch(geometryAdded(type, geom));
        },
        geometryChanged: (type, geom) => {
            dispatch(geometryChanged(type, geom));
        }
    }
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Mappa));
