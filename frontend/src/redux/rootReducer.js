import { combineReducers } from "redux";
import {taskReducer} from './taskReducer';
import {employeeReducer} from './employeeReducer';
import {othersReducer} from './othersReducer';

export const rootReducer = combineReducers({
    taskReducer,
    employeeReducer,
    othersReducer
});
