import {
    fetch
} from './index';
import config from '../config';

export function fetchObservableProperties(name = config.name){
    return fetch(
        {
            type: 'FETCH_OBSERVABLE_PROPERTIES',
            name: name
        }
    );
};
