import { combineReducers } from 'redux';

import { orgReducer } from './organization';

export default combineReducers({organization : orgReducer})