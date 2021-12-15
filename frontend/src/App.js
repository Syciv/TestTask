import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EmployeeEdit from './employees/employeeEdit';
import Employees from './employees/employees'
import Tasks from './tasks/tasks';
import TaskEdit from './tasks/taskEdit';
import {connect} from 'react-redux';
import {loadEmployees, loadTasks} from './redux/actions';
import {useEffect} from 'react';
import { useDispatch } from 'react-redux';

function App(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadEmployees());
        dispatch(loadTasks())
      }, []);

    return (
        <Router>
          <Switch>
            <Route path='/employees' exact={true} component={Employees}/>
            <Route path='/employees/:id' component={EmployeeEdit}/>
            <Route path='/tasks' exact={true} component={Tasks}/>
            <Route path='/tasks/:id' component={TaskEdit}/>
          </Switch>
        </Router>
    )
  }

function mapStateToProps(state){
    const {employeeReducer} = state;
    return {
      employees: employeeReducer.employees
    }
}

export default connect(mapStateToProps)(App);
