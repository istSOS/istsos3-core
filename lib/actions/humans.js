import {
    fetch
} from './index';
import config from '../config';

export function fetchHumans(name = config.name){
    return fetch(
        {
            type: 'FETCH_HUMANS',
            name: name
        }
    );
};
