import {
    fetch
} from './index';

export function fetchUoms(conf = {}) {
    return fetch(
        {
            type: 'FETCH_UOMS',
            ...conf.name
        }
    );
};
