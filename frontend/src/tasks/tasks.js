import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import {bindActionCreators}  from 'redux';
import {connect} from 'react-redux';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {loadTasks, removeTask} from '../redux/actions';

function Tasks(props) {

  const dispatch = useDispatch();

  // useEffect(() => {
  //     dispatch(loadTasks());
  //   }, []);

  const taskList = props.tasks.map(task => {
        return <tr key={task.id}>
                <td>{task.description}</td>
                <td>{task.employeename}</td>
                <td>{task.priority}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/tasks/" + task.id}>Изменить</Button>
                        <Button size="sm" color="danger" onClick={()=> props.removeTask(task.id)}>Удалить</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <Container fluid>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/tasks/new">Добавить задачу</Button>
                        <br/>
                        <Button color="success" tag={Link} to="/employees">К сотрудникам</Button>
                    </div>
                    <h3>Задачи</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="15%" >Название</th>
                            <th width="15%">Исполнитель</th>
                            <th width="15%">Приоритет</th>
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
