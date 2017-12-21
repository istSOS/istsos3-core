
// Actions
import {
    fetch
} from './actions';

import {
    fetchSensors
} from './actions/sensors';

import {
    fetchObservableProperties
} from './actions/observedProperties';

import store, {
    injectReducer,
    configureStore,
    sensorReducer,
    observedPropertiesReducer
} from './reducers'

import DateRange from './dateRange/dateRangeComponent';
import SensorCard from './sensor/sensorCard';
import ObservableProperties from './observableProperties/observablePropertiesContainer';

module.exports = {
    // Actions
    fetch,
    fetchSensors,
    fetchObservableProperties,

    // Reducers
    store,
    configureStore,
    injectReducer,
    sensorReducer,
    observedPropertiesReducer,

    // Components
    DateRange,
    SensorCard,
    ObservableProperties
};
