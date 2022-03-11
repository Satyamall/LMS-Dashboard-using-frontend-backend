import { combineReducers } from 'redux';

import courses from './courses';
import auth from './auth';

export const reducers = combineReducers({ courses, auth });
