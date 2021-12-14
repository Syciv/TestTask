import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EmployeeEdit from './employees/employeeEdit';
import Employees from './employees/employees'
import Tasks from './tasks/tasks';
import TaskEdit from './tasks/taskEdit';

class App extends Component {
  render() {
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
}

export default App;
