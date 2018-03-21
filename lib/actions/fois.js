import {
    fetch
} from './index';
import config from '../config';

export function fetchFois(name = config.name){
    return fetch(
        {
            type: 'FETCH_FOIS',
            name: name
        }
    );
};

export function checkFoiName(
    text, name = config.name, onSuccess = undefined
){
    return fetch(
        {
            type: 'CHECK_FOI_NAME',
            name: name
        }, {
            name: text
        }, onSuccess
    );
};

export function checkFoiIdentifier(
    text, name = config.name, onSuccess = undefined
){
    return fetch(
        {
            type: 'CHECK_FOI_IDENTIFIER',
            name: name
        }, {
            identifier: text
        }, onSuccess
    );
};
