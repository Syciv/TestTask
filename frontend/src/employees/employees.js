import React from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { useState } from 'react';
import { removeEmployee} from '../redux/actions';
import useStyles from "../style";
import { sortLogic, changeSort } from "../handles"

function Employees(props){

  const classes = useStyles();

  const [sorting, setSorting] = useState({field: 'name', increase: true});

  const handleRemoveClick = event => {
    props.removeEmployee(Number(event.target.id))
  }

  // Изменение параметров сортировки при нажатии на заголовок таблицы
  const handleClick = event => {
    changeSort(event, sorting, setSorting);
  }

  // Отсортированный список
  const employeesSorted = props.employees.sort((a, b) => sortLogic(a, b, sorting));

  // Формирование строк таблицы сотрудников
  const emplList = employeesSorted.map(employee => {
      return  <tr className={classes.t_row} key={employee.id}>
          <td width="5%">{employee.id} </td>
          <td width="15%">{employee.name}</td>
          <td width="15%">{employee.filialname}</td>
          <td width="15%">{employee.postname}</td>
          <td width="15%">{employee.chiefname}</td>
          <td width="15%">{employee.tasksnum}</td>
          <td width="15%">
              <ButtonGroup>
                  <Button className={classes.button_com} onClick={() =>
                    window.location.href = "/employees/" + employee.id}>Изменить</Button>
                  <Button id={employee.id} className={classes.button_delete} onClick={handleRemoveClick}>Удалить</Button>
              </ButtonGroup>
          </td>
          </tr>
      });
  return (
        <div>
          <Container>
              <Button className={classes.button_com} onClick={() =>
                window.location.href = "/employees/new"}>Добавить сотрудника</Button>
              <Table className={classes.table}>
                  <thead className={classes.t_head}>
                  <tr>
                      <th name="id" onClick={handleClick} width="5%" >ID</th>
                      <th name="name" onClick={handleClick} width="15%">Имя </th>
                      <th name="filialname" onClick={handleClick} width="15%">Филиал</th>
                      <th name="postname" onClick={handleClick} width="15%">Должность</th>
                      <th name="chiefname" onClick={handleClick} width="15%">Руководитель</th>
                      <th name="tasksnum" onClick={handleClick} width="15%">Задачи</th>
                      <th width="15%">Действия</th>
                  </tr>
                  </thead>
              </Table>
              <div className={classes.scroll_table}>
              <Table className={classes.table}>
              <tbody>
                  {emplList}
              </tbody>
              </Table>
              </div>
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
