import axios from 'axios';
import config from '../config';

export function fetch(
        fetchingAction,
        data = undefined,
        onSuccess = undefined
    ){
    return function(dispatch){
        if (data !== undefined){
            data = {
                data: data
            };
        }
        const action = {
            name: config.name,
            ...fetchingAction
        };
        dispatch(action);
        return axios({
            url: '/rest',
            timeout: 20000,
            method: 'post',
            responseType: 'json',
            data: {
                action: action.type,
                ...data
            }
        })
        .then(function(response) {
            if(onSuccess!==undefined){
                onSuccess(dispatch, response.data);
            }else{
                dispatch({
                    type: action.type + "_OK",
                    name: action.name,
                    json: response.data,
                    status: response.status,
                    message: response.statusText
                });
            }
        })
        .catch(function (error) {
            debugger;
            dispatch({
                type: action.type + "_ERROR",
                name: action.name,
                json: error.response.data,
                status: error.response.status,
                message: error.response.statusText
            });
        });
    }
};

export {fetchFois} from "./fois";
