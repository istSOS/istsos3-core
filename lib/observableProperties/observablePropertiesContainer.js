import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    fetchObservableProperties
} from '../actions/observedProperties';

import {
    fetch_observable_properties,
    observablePropertySelected,
    openDialog
} from './observablePropertiesAction'

import ObservablePropertiesComponent from './observablePropertiesComponent';
import ObservablePropertiesDropdown from './observablePropertiesDropdown';

class ObservableProperties extends Component {
    componentDidMount() {
        const {
            fetchObservableProperties
        } = this.props;
        fetchObservableProperties()
    }
    render() {
        const {
            layout
        } = this.props;
        if (layout==="select"){
            return(
                <ObservablePropertiesComponent
                    {...this.props}/>
            );
        }else if(layout==="dropdown"){
            return(
                <ObservablePropertiesDropdown
                    {...this.props}/>
            );
        }
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        observed_properties: state.observed_properties,
        core_observable_properties: state.core_observable_properties,
        layout: 'select',
        hideButton: false,
        ...ownProps
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch: dispatch,
        fetchObservableProperties: () => {
            dispatch(fetchObservableProperties());
        },
        /*observablePropertySelected: (selected) => {
            dispatch(observablePropertySelected(selected))
        },*/
        openDialog: (open) => {
            dispatch(openDialog(open))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ObservableProperties);
