import {
    fetch
} from './index';
import config from '../config';

export function fetchSamplingTypes(name = config.name){
    return fetch(
        {
            type: 'FETCH_SAMPLING_TYPES',
            name: name
        }
    );
};
