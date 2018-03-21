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
        fcnt: 0, // fetch counter
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
                    fcnt: (state.fcnt+1),
                    data: action.json.data
                };
            default:
                return state;
        }
    }
}

export function observedPropertiesReducer(reducerName = config.name){
    const initialState = {
        isFetching: false,
        rtime: 0, // fetch time
        fcnt: 0, // fetch counter
        dlen: 0, // data counter
        data: [],
        norm: {}
    };
    return function observedProperties(state = initialState, action) {
        const {name} = action;
        if(name !== reducerName) return state;
        switch (action.type) {
            case 'FETCH_OBSERVABLE_PROPERTIES':
                return {
                    ...initialState,
                    rtime: (
                        new Date()
                    ).getTime(),
                    isFetching: true
                };
            case 'FETCH_OBSERVABLE_PROPERTIES_OK':
                let len = action.json.data.length;
                let copy = {
                    fcnt: (state.fcnt + 1),
                    dlen: len,
                    isFetching: false,
                    rtime: (
                        new Date()
                    ).getTime() - state.rtime,
                    data: action.json.data,
                    norm: {}
                };
                copy.data.forEach((o)=>{
                    copy.norm[o.definition] = o;
                })
                return copy;
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

export function uomsReducer(reducerName = config.name){
    const initialState = {
        isFetching: false,
        rtime: 0, // fetch time
        fcnt: 0, // fetch counter
        dlen: 0, // data counter
        data: [],
        norm: {}
    };
    return function uoms(state = initialState, action) {
        const {name} = action;
        if(name !== reducerName) return state;
        switch (action.type) {
            case 'FETCH_UOMS':
                return {
                    ...initialState,
                    rtime: (
                        new Date()
                    ).getTime(),
                    isFetching: true
                };
            case 'FETCH_UOMS_OK':
                let len = action.json.data.length;
                let copy = {
                    fcnt: (state.fcnt + 1),
                    dlen: len,
                    isFetching: false,
                    rtime: (
                        new Date()
                    ).getTime() - state.rtime,
                    data: action.json.data,
                    norm: {}
                };
                copy.data.forEach((o)=>{
                    copy.norm[o.name] = o;
                })
                return copy;
            default:
                return state;
        }
    }
};

export function observationtypesReducer(reducerName = config.name){
    const initialState = {
        isFetching: false,
        rtime: 0, // fetch time
        fcnt: 0, // fetch counter
        dlen: 0, // data counter
        data: [],
        norm: {}
    };
    return function observationtypes(state = initialState, action) {
        const {name} = action;
        if(name !== reducerName){
            return state;
        };
        switch (action.type) {
            case 'FETCH_OBSERVATION_TYPES':
                return {
                    ...initialState,
                    rtime: (
                        new Date()
                    ).getTime(),
                    isFetching: true
                };
            case 'FETCH_OBSERVATION_TYPES_OK':{
                let len = action.json.data.length;
                let copy = {
                    fcnt: (state.fcnt + 1),
                    dlen: len,
                    isFetching: false,
                    rtime: (
                        new Date()
                    ).getTime() - state.rtime,
                    data: action.json.data,
                    norm: {}
                };
                copy.data.forEach((o)=>{
                    copy.norm[o.definition] = o;
                })
                return copy;
            }
            default:
                return state;
        }
    }
};

export function foisReducer(reducerName = config.name){
    const initialState = {
        isFetching: false,
        rtime: 0, // fetch time
        fcnt: 0, // fetch counter
        dlen: 0, // data counter
        data: []
    };
    return function fois(state = initialState, action) {
        const {name} = action;
        if(name !== reducerName){
            return state;
        };
        switch (action.type) {
            case 'FETCH_FOIS':
                return {
                    ...initialState,
                    rtime: (
                        new Date()
                    ).getTime(),
                    isFetching: true
                };
            case 'FETCH_FOIS_OK':{
                let len = action.json.data.length;
                return {
                    fcnt: (state.fcnt + 1),
                    dlen: len,
                    isFetching: false,
                    rtime: (
                        new Date()
                    ).getTime() - state.rtime,
                    data: action.json.data
                };
            }
            default:
                return state;
        }
    }
};

export function humansReducer(reducerName = config.name){
    const initialState = {
        isFetching: false,
        rtime: 0, // fetch time
        fcnt: 0, // fetch counter
        dlen: 0, // data counter
        data: []
    };
    return function humans(state = initialState, action) {
        const {name} = action;
        if(name !== reducerName){
            return state;
        };
        switch (action.type) {
            case 'FETCH_HUMANS':
                return {
                    ...initialState,
                    rtime: (
                        new Date()
                    ).getTime(),
                    isFetching: true
                };

            case 'FETCH_HUMANS_OK': {
                let len = action.json.data.length;
                return {
                    fcnt: (state.fcnt + 1),
                    dlen: len,
                    isFetching: false,
                    rtime: (
                        new Date()
                    ).getTime() - state.rtime,
                    data: action.json.data
                };
            }

            case 'CREATE_HUMAN_OK': {
                let data = [action.json.data, ...state.data];
                let len = data.length;
                return {
                    fcnt: (state.fcnt + 1),
                    dlen: len,
                    isFetching: false,
                    rtime: (
                        new Date()
                    ).getTime() - state.rtime,
                    data: data
                };
            }

            default:
                return state;
        }
    }
};

export function samplingtypesReducer(reducerName = config.name){
    const initialState = {
        isFetching: false,
        rtime: 0, // fetch time
        fcnt: 0, // fetch counter
        dlen: 0, // data counter
        data: [],
        norm: {}
    };
    return function samplingtypes(state = initialState, action) {
        const {name} = action;
        if(name !== reducerName) return state;
        switch (action.type) {
            case 'FETCH_SAMPLING_TYPES':
                return {
                    ...initialState,
                    rtime: (
                        new Date()
                    ).getTime(),
                    isFetching: true
                };
            case 'FETCH_SAMPLING_TYPES_OK':
                let len = action.json.data.length;
                let copy = {
                    fcnt: (state.fcnt + 1),
                    dlen: len,
                    isFetching: false,
                    rtime: (
                        new Date()
                    ).getTime() - state.rtime,
                    data: action.json.data,
                    norm: {}
                };
                // copy.data.forEach((o)=>{
                //     copy.norm[o.name] = o;
                // })
                return copy;
            default:
                return state;
        }
    }
};

// Function that add dynamically reducers to the store
// Inspired by: https://stackoverflow.com/a/33044701
export function createReducer(pluginsReducers) {
    return combineReducers({
        core_observable_properties,
        core_observable_property_form,
        core_map,
        core_observed_properties: observedPropertiesReducer(),
        sensors: sensorReducer(),
        core_observationtypes: observationtypesReducer(),
        core_fois: foisReducer(),
        core_humans: humansReducer(),
        core_uoms: uomsReducer(),
        core_samplingtypes: samplingtypesReducer(),
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
