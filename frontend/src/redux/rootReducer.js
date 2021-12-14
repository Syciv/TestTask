import { combineReducers } from "redux";
import {taskReducer} from './taskReducer';
import {employeeReducer} from './employeeReducer';

export const rootReducer = combineReducers({
    taskReducer,
    employeeReducer
});
