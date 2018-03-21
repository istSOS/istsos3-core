import {
    fetch
} from './index';
import config from '../config';

export function fetchObservationTypes(name = config.name){
    return fetch(
        {
            type: 'FETCH_OBSERVATION_TYPES',
            name: name
        }
    );
};
