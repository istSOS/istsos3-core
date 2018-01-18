import {
    fetch
} from './index';
import config from '../config';

export function fetchSensors(conf = {
    filters: undefined,
    name: config.name
}) {
    return fetch(
        {
            type: 'FETCH_SENSORS',
            ...{
                name: conf.name
            }
        },
        conf.filters
    );
};
