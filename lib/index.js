// Actions
import {
    fetch
} from './actions';

import {
    registerSensor,
    fetchSensors,
    checkSensorName
} from './actions/sensors';

import {
    checkSpecimenIdentifier,
    fetchProcessingDetails
} from './actions/specimen';

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
    fetchHumans
} from './actions/humans';

import {
    fetchMaterials
} from './actions/material';

import {
    fetchSamplingTypes,
    fetchSamplingMethods
} from './actions/sampling';

import {
    ObservedPropertyPropType,
    SensorPropTypes,
    ProcessingPropTypes,
    SpecimenPropTypes,
    HumanPropTypes,
    FoiPropTypes,
    SamplingTypesPropTypes,
    SamplingMethodsPropTypes,
    MaterialPropTypes,
    UomPropTypes,
    ProcessingDetailPropTypes
} from './proptypes';

import store, {
    injectReducer,
    configureStore,
    sensorReducer,
    observedPropertiesReducer,
    uomsReducer,
    materialsReducer
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
    ProcessingPropTypes,
    SpecimenPropTypes,
    HumanPropTypes,
    FoiPropTypes,
    SamplingTypesPropTypes,
    SamplingMethodsPropTypes,
    MaterialPropTypes,
    UomPropTypes,
    ProcessingDetailPropTypes,

    // Actions
    fetch,
    registerSensor,
    fetchSensors,
    checkSensorName,
    checkSpecimenIdentifier,
    fetchProcessingDetails,
    fetchFois,
    checkFoiName,
    checkFoiIdentifier,
    fetchObservableProperties,
    fetchObservationTypes,
    fetchUoms,
    fetchObservations,
    fetchSamplingMethods,
    fetchSamplingTypes,
    fetchHumans,
    fetchMaterials,

    // Reducers
    store,
    configureStore,
    injectReducer,
    sensorReducer,
    observedPropertiesReducer,
    uomsReducer,
    materialsReducer,

    // Components
    // DateRange,
    // SensorCard,
    // ObservableProperties,
    // Mappa,

    // Utils
    setting,
    config
};
