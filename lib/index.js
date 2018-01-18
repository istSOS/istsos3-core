
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

import {
    fetchObservations
} from './actions/observations';

import store, {
    injectReducer,
    configureStore,
    sensorReducer,
    observedPropertiesReducer
} from './reducers'

import DateRange from './dateRange/dateRangeComponent';
import SensorCard from './sensor/sensorCard';
import ObservableProperties from './observableProperties/observablePropertiesContainer';
import Mappa from './map/mapContainer';

module.exports = {
    // Actions
    fetch,
    fetchSensors,
    fetchObservableProperties,
    fetchObservations,

    // Reducers
    store,
    configureStore,
    injectReducer,
    sensorReducer,
    observedPropertiesReducer,

    // Components
    DateRange,
    SensorCard,
    ObservableProperties,
    Mappa
};
