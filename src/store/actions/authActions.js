/* eslint-disable prettier/prettier */
import { actionType } from '../contants';

export const loginUser = () => {
    return dispatch => {
        // LOADING TRUE
        dispatch({
            type: actionType.LOADING_TRUE,
        });

        // LOGIN API HERE
    };
};

export const signupUser = () => {
    return dispatch => {
        // LOADING TRUE
        dispatch({
            type: actionType.LOADING_TRUE,
        });

        // SIGNUP API HERE
    };
};
