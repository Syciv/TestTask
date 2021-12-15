import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import {bindActionCreators}  from 'redux';
import {connect} from 'react-redux';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {loadEmployees, removeEmployee} from '../redux/actions';


function Employees(props){

    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(loadEmployees());
    //   }, []);
     console.log(props.employees);

    const emplList = props.employees.map(employee => {
      return 
      <tr key={employee.id}>
          <td>{employee.id} </td>
          <td>{employee.name}</td>
          <td>{employee.filial}</td>
          <td>{employee.post}</td>
          <td>{employee.chiefname}</td>
          <td>{employee.tasksnum}</td>
          <td>
              <ButtonGroup>
                  <Button size="sm" color="primary" tag={Link} to={"/employees/" + employee.id}>Изменить</Button>
                  <Button size="sm" color="danger" onClick={()=> props.removeEmployee(employee.id)} >Удалить</Button>
              </ButtonGroup>
          </td>
          </tr>
      });
      return (  
        <div>
          <Container fluid>
              <div className="float-right">
                  <Button color="success"  tag={Link} to="/employees/new">Добавить сотрудника</Button>
              </div>
              <div className="float-right">
                  <Button color="success" tag={Link} to="/tasks">К задачам</Button>
              </div>
              <h3>Сотрудники</h3>
              <Table className="mt-4">
                  <thead>
                  <tr>
                      <th width="5%" >ID</th>
                      <th width="15%" >Имя </th>
                      <th width="15%">Филиал</th>
                      <th width="15%">Должность</th>
                      <th width="15%">Руководитель</th>
                      <th width="15%">Задачи</th>
                      <th width="15%">Действия</th>
                  </tr>
                  </thead>
                  <tbody>
                  {emplList}
                  </tbody>
              </Table>
          </Container>
      </div>
    );
  }

function mapStateToProps(state){
    const {employeeReducer} = state;
    return {
      employees: employeeReducer.employees
    }
}

const mapDispatchToProps = {
       removeEmployee
  }


export default connect(mapStateToProps, mapDispatchToProps)(Employees);
