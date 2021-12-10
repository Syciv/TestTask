import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EmployeesList from './EmployeesList';
import EmployeeEdit from './EmployeeEdit';

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path='/employees' exact={true} component={EmployeesList}/>
            <Route path='/employees/:id' component={EmployeeEdit}/>
          </Switch>
        </Router>
    )
  }
}

export default App;
