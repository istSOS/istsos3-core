import {
    fetch
} from './index';

export function fetchSensors(conf = {
    filters: undefined,
    name: config.name
}) {
    console.log(conf);
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
