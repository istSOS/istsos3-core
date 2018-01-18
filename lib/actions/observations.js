import {
    fetch
} from './index';
import config from '../config';

export function fetchObservations(conf = {
    data: {},
    name: config.name
}) {
    return fetch(
        {
            type: 'FETCH_OBSERVATIONS',
            name: conf.name
        },
        conf.data
    );
};
