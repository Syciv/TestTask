import React from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { useState } from 'react';
import { removeTask } from '../redux/actions';
import useStyles from "../style";


function Tasks(props) {

  const classes = useStyles();

  const [sorting, setSorting] = useState({field: 'priority', increase: true});

  // Изменение параметров сортировки при нажатии на заголовок таблицы
  const handleClick = event => {
    const name = event.target.getAttribute('name');
    const increase = name === sorting.field ? !sorting.increase : true;
    setSorting({['field']:name, ['increase']:increase});
  }
  const {tasks} = props;

  // Отсортированный список
  const tasksSorted = tasks.sort(function(a,b){
     return a[sorting.field]>b[sorting.field] && sorting.increase ? 1 : -1;
  });

  const taskList = tasksSorted.map(task => {
        return <tr className={classes.t_row} key={task.id}>
                <td width="5%">{task.id}</td>
                <td width="15%">{task.description}</td>
                <td width="15%">{task.employeename}</td>
                <td width="15%">{task.priority}</td>
                <td width="15%">
                    <ButtonGroup>
                        <Button className={classes.button_com} onClick={() =>
                          window.location.href = "/tasks/" + task.id}>Изменить</Button>
                        <Button className={classes.button_delete} onClick={() => props.removeTask(task.id)}>Удалить</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <Container>
                    <div>
                      <Button align="right" className={classes.button_com} onClick={() =>
                        window.location.href = "/tasks/new"}>Добавить задачу</Button>
                    </div>
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
                    </Table>
                    <div className={classes.scroll_table}>
                    <Table className={classes.table}>
                      <tbody>
                          {taskList}
                      </tbody>
                    </Table>
                    </div>
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
