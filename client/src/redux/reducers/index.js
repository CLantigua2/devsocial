import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';

// takes in other reducers and combines
export default combineReducers({
	auth: authReducer,
	errors: errorReducer
});

// this file is used to take in all of the separate reducers and combine them then export them as an object
