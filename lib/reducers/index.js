import config from '../config';

import core_observable_properties from '../observableProperties/observablePropertiesState';
import core_observable_property_form from '../observablePropertyForm/observablePropertyFormState';
import core_map from '../map/mapState';

import {
    combineReducers,
    createStore,
    applyMiddleware
} from 'redux';
import thunkMiddleware from 'redux-thunk';

export function sensorReducer(reducerName = config.name){
    return function sensors(state = {
        isFetching: false,
        data: []
    }, action) {
        const {name} = action;
        if(name !== reducerName) return state;
        switch (action.type) {
            case 'FETCH_SENSORS':
                return {
                    ...state,
                    isFetching: true,
                    data: []
                };
            case 'FETCH_SENSORS_OK':
                return {
                    ...state,
                    isFetching: false,
                    data: action.json.data
                };
            default:
                return state;
        }
    }
}

export function observedPropertiesReducer(reducerName = config.name){
    return function observedProperties(state = {
        isFetching: false,
        data: []
    }, action) {
        const {name} = action;
        if(name !== reducerName) return state;
        switch (action.type) {
            case 'FETCH_OBSERVABLE_PROPERTIES':
                return {
                    ...state,
                    isFetching: true,
                    data: []
                };
            case 'FETCH_OBSERVABLE_PROPERTIES_OK':
                return {
                    ...state,
                    isFetching: false,
                    data: action.json.data
                };
            case 'CREATE_OBSERVABLE_PROPERTY_OK':
                return {
                    ...state,
                    data: [action.json.data, ...state.data]
                };
            default:
                return state;
        }
    }
}

// Function that add dynamically reducers to the store
// Inspired by: https://stackoverflow.com/a/33044701
export function createReducer(pluginsReducers) {
    return combineReducers({
        core_observable_properties,
        core_observable_property_form,
        core_map,
        observed_properties: observedPropertiesReducer(),
        sensors: sensorReducer(),
        ...pluginsReducers
    });
}
export function configureStore() {
    const store = createStore(
        createReducer(),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(
            thunkMiddleware
        )
    );
    store.pluginsReducers = {};
    return store;
}

export function injectReducer(store, reducer) {
    store.pluginsReducers = {
        ...store.pluginsReducers,
        ...reducer
    };
    store.replaceReducer(createReducer(store.pluginsReducers));
}

const store = configureStore();
export default store;
