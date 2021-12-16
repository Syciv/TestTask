import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import {bindActionCreators}  from 'redux';
import {connect} from 'react-redux';
import { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {loadTasks, removeTask} from '../redux/actions';
import useStyles from "../style";


function Tasks(props) {

  const dispatch = useDispatch();

  const classes = useStyles();

  const [sorting, setSorting] = useState({field: 'priority', increase: true})

  const handleClick = event => {
    const name = event.target.getAttribute('name');
    const increase = name === sorting.field ? !sorting.increase : true;
    setSorting({['field']: name, ['increase']: increase});
  }
  const {tasks} = props;

  const tasksSorted = tasks.sort(function(a,b){
     return a[sorting.field]>b[sorting.field] && sorting.increase ? 1 : -1;

  });

  const taskList = tasksSorted.map(task => {
        return <tr className={classes.t_row} key={task.id}>
                <td>{task.id}</td>
                <td>{task.description}</td>
                <td>{task.employeename}</td>
                <td>{task.priority}</td>
                <td>
                    <ButtonGroup>
                        <Button className={classes.button_com} tag={Link} to={"/tasks/" + task.id}>Изменить</Button>
                        <Button className={classes.button_delete} onClick={() => props.removeTask(task.id)}>Удалить</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <Container className={classes.cont}>
                    <div>
                        <Button align="left" className={classes.button_com} tag={Link} to="/employees">К сотрудникам</Button>
                        <Button align="right" className={classes.button_com} tag={Link} to="/tasks/new">Добавить задачу</Button>
                    </div>
                    <h3>Задачи</h3>
                    <Table className={classes.table}>
                        <thead className={classes.t_head}>
                        <tr>
                            <th name="id" onClick={handleClick} width="5%" >ID</th>
                            <th name="description" onClick={handleClick} width="15%">Название</th>
                            <th name="employeename" onClick={handleClick} width="15%">Исполнитель</th>
                            <th name="priority" onClick={handleClick} width="15%">Приоритет</th>
                            <th width="15%">Действия</th>
                        </tr>
                        </thead>
                        <tbody>
                        {taskList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }

function mapStateToProps(state){
    const {taskReducer} = state;
    return {
        tasks: taskReducer.tasks
      }
    }


const mapDispatchToProps = {
           removeTask
      }


export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
