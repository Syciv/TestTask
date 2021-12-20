import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EmployeeEdit from './employees/employeeEdit';
import TaskEdit from './tasks/taskEdit';
import Home from './home.js'
import { connect } from 'react-redux';
import { loadEmployees, loadTasks, loadFilials, loadPosts } from './redux/actions';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function App(props) {


  const dispatch = useDispatch();

  useEffect(() => {
        dispatch(loadEmployees());
        dispatch(loadTasks());
        dispatch(loadFilials());
        dispatch(loadPosts())
      }, []);

  document.title = 'Тестовое задание'
  return(
    <Router>
      <Switch>
        <Route path='/' exact={true} component={Home}/>
        <Route path='/:tab' exact={true} component={Home}/>
        <Route path='/employees/:id' component={EmployeeEdit}/>
        <Route path='/tasks/:id' component={TaskEdit}/>
      </Switch>
    </Router>
  )
  }

function mapStateToProps(state){
    const {employeeReducer, taskReducer, othersReducer} = state;
    return {
      employees: employeeReducer.employees,
      tasks: taskReducer.tasks,
      posts: othersReducer.posts,
      filials: othersReducer.filials
    }
}

export default connect(mapStateToProps)(App);
