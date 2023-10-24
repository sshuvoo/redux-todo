import { combineReducers } from 'redux';
import todoReducer from './todo/reducer';
import filterReducer from './todo/filterReducer';

const rootReducer = combineReducers({
   todoState: todoReducer,
   todoFilter: filterReducer,
});

export default rootReducer;
