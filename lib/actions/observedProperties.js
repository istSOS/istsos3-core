import {
    fetch
} from './index';

export function fetchObservableProperties(conf = {}) {
    return fetch(
        {
            type: 'FETCH_OBSERVABLE_PROPERTIES',
            ...conf.name
        }
    );
};
