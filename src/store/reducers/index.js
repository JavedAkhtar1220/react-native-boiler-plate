/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux';
import { authReducer } from './authReducer';

export const rootReducer = combineReducers({
    user: authReducer,
});
