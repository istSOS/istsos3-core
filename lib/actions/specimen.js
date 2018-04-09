import {
    fetch
} from './index';
import config from '../config';

export function checkSpecimenIdentifier(
    text, name = config.name, onSuccess = undefined
){
    return fetch(
        {
            type: 'CHECK_SPECIMEN_IDENTIFIER',
            name: name
        }, {
            identifier: text
        }, onSuccess
    );
};

export function fetchProcessingDetails(conf = {}) {
    return fetch(
        {
            type: 'FETCH_PROCESSING_DETAILS',
            ...conf.name
        }
    );
};
