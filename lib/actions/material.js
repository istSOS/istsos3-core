import {
    fetch
} from './index';
import config from '../config';

export function fetchMaterials(name=config.name) {
    return fetch(
        {
            type: 'FETCH_MATERIALS',
            name: name
        }
    );
};
