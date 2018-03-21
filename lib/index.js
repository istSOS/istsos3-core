// Actions
import {
    fetch
} from './actions';

import {
    fetchSensors,
    checkSensorName
} from './actions/sensors';

import {
    fetchFois,
    checkFoiName,
    checkFoiIdentifier
} from './actions/fois';

import {
    fetchObservableProperties
} from './actions/observedProperties';

import {
    fetchObservationTypes
} from './actions/observationTypes';

import {
    fetchUoms
} from './actions/uoms';

import {
    fetchObservations
} from './actions/observations';

import {
    fetchSamplingTypes
} from './actions/samplingTypes';

import {
    fetchHumans
} from './actions/humans';

import {
    ObservedPropertyPropType,
    SensorPropTypes,
    HumanPropTypes,
    FoiPropTypes,
    SamplingTypesPropTypes
} from './proptypes';

import store, {
    injectReducer,
    configureStore,
    sensorReducer,
    observedPropertiesReducer,
    uomsReducer
} from './reducers'

//import DateRange from './dateRange/dateRangeComponent';
//import SensorCard from './sensor/sensorCard';
//import ObservableProperties from './observableProperties/observablePropertiesContainer';
//import Mappa from './map/mapContainer';

import config from './config';
import {
    setting
} from './setting';

module.exports = {
    // PropTypes
    ObservedPropertyPropType,
    SensorPropTypes,
    HumanPropTypes,
    FoiPropTypes,
    SamplingTypesPropTypes,

    // Actions
    fetch,
    fetchSensors,
    checkSensorName,
    fetchFois,
    checkFoiName,
    checkFoiIdentifier,
    fetchObservableProperties,
    fetchObservationTypes,
    fetchUoms,
    fetchObservations,
    fetchSamplingTypes,
    fetchHumans,

    // Reducers
    store,
    configureStore,
    injectReducer,
    sensorReducer,
    observedPropertiesReducer,
    uomsReducer,

    // Components
    // DateRange,
    // SensorCard,
    // ObservableProperties,
    // Mappa,

    // Utils
    setting,
    config
};
