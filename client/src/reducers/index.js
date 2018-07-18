import { combineReducers } from 'redux';
import userReducer from './userReducer';
import beerReducer from './beerReducer';

export default combineReducers({user: userReducer, beers: beerReducer})
