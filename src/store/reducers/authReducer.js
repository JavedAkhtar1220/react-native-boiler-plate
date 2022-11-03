/* eslint-disable prettier/prettier */
import { actionType } from '../contants';

const INITIAL_STATE = {
    loading: false,
    user: {},
};

export const authReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case actionType.LOADING_TRUE:
            return {
                ...state,
                loading: true,
            };
        case actionType.LOADING_FALSE:
            return {
                ...state,
                loading: false,
            };
        case actionType.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: payload,
            };
        case actionType.LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                user: {},
            };
        case actionType.SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case actionType.SIGNUP_FAIL:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};
