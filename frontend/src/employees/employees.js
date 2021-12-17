import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import {bindActionCreators}  from 'redux';
import {connect} from 'react-redux';
import { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {loadEmployees, removeEmployee} from '../redux/actions';
import useStyles from "../style";

function Employees(props){

    const dispatch = useDispatch();

    console.log(props.employees);

    const classes = useStyles();

  const [sorting, setSorting] = useState({field: 'name', increase: true})

  const handleRemoveClick = event => {
    props.removeEmployee(Number(event.target.id))
  }

  const handleClick = event => {
    const name = event.target.getAttribute('name');
    const increase = name === sorting.field ? !sorting.increase : true;
    setSorting({['field']: name, ['increase']: increase});
  }

    const employeesSorted = props.employees.sort(function(a,b){
      return a[sorting.field]>b[sorting.field] && sorting.increase ? 1 : -1;
    });

    const emplList = employeesSorted.map(employee => {
      return  <tr className={classes.t_row} key={employee.id}>
          <td>{employee.id} </td>
          <td>{employee.name}</td>
          <td>{employee.filialname}</td>
          <td>{employee.postname}</td>
          <td>{employee.chiefname}</td>
          <td>{employee.tasksnum}</td>
          <td>
              <ButtonGroup>
                  <Button className={classes.button_com} tag={Link} to={"/employees/" + employee.id}>Изменить</Button>
                  <Button id={employee.id} className={classes.button_delete} onClick={handleRemoveClick} >Удалить</Button>
              </ButtonGroup>
          </td>
          </tr>
      });
      return (
        <div>
          <Container className={classes.cont}>
              <div >
                  <Button align="left" className={classes.button_com} tag={Link} to="/tasks">К задачам</Button>
                  <Button align="right" className={classes.button_com} tag={Link} to="/employees/new">Добавить сотрудника</Button>
              </div>
              <h3>Сотрудники</h3>
              <Table className={classes.table}>
                  <thead className={classes.t_head}>
                  <tr>
                      <th name="id" onClick={handleClick} width="5%" >ID</th>
                      <th name="name" onClick={handleClick} width="15%">Имя </th>
                      <th name="filialname" onClick={handleClick} width="15%">Филиал</th>
                      <th name="postname" onClick={handleClick} width="15%">Должность</th>
                      <th name="chiefname" onClick={handleClick} width="15%">Руководитель</th>
                      <th name="tasksnum" onClick={handleClick}  width="15%">Задачи</th>
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
