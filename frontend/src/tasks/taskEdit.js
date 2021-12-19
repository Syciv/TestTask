import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import { useState, useEffect } from 'react';
import {addTask, editTask} from '../redux/actions';
import {connect} from 'react-redux';
import useStyles from "../style";
import { submit, change, getEntity } from '../handles'


function TaskEdit(props) {

    const emptyTask = {
        description: '',
        priority: '1',
        employeeid: ''
    };

    const [task, setTask] = useState(emptyTask);

    const classes = useStyles();

    // Получаем редактируемую задачу
    useEffect(() => {
      if(props.match.params.id !== 'new'){
          getEntity('tasks', props.match.params.id, setTask);
        };
      }, []);

    //Изменение инпутов
    const handleChange = event => {
      change(event, setTask, task)
    }

    const title = <h2>{task.id ? 'Редактировать задачу' : 'Добавить задачу'}</h2>;

    const defaultOption = props.match.params.id === 'new' ? <option value='' disabled selected>Выберите исполнителя</option> : ''

    return <div>
        <Container align="center">
            {title}
            <Form onSubmit={(event) => submit(event, props.editTask, props.addTask, task, 1)}>
                <FormGroup>
                    <Label className={classes.label} for="description">Описание:</Label><br/>
                    <Input className={classes.input} type="textarea" name="description" id="description" value={task.description || ''}
                           onChange={handleChange} autoComplete="description" required/>
                </FormGroup>
                <FormGroup>
                    <Label className={classes.label} for="priority">Приоритет:</Label><br/>
                    <Input className={classes.input} type="number" min="1" max="9" onkeypress="return false" name="priority" id="priority" value={task.priority}
                           onChange={handleChange} autoComplete="priority"/>
                </FormGroup>
                <FormGroup>
                    <Label className={classes.label} for="employeeid">Исполнитель:</Label><br/>
                    <Input className={classes.input} type="select" name="employeeid" id="employeeid" autoComplete="employeeid"
                           onChange={handleChange} required>
                           {defaultOption}
                           {props.employees.map(e =>
                             {return (
                              <option key={e.id} value={e.id}>
                                {e.name}
                              </option>)}
                            )};
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Button className={classes.button_com} type="submit">Сохранить</Button>{' '}
                    <Button className={classes.button_delete} tag={Link} to="/?tab=1">Отменить</Button>
                </FormGroup>
            </Form>
        </Container>
    </div>
  }

  function mapStateToProps(state){
      const {employeeReducer} = state;
      return {
        employees: employeeReducer.employees
      }
  }

  const mapDispatchToProps = {
         addTask,
         editTask
  }

  export default connect(mapStateToProps, mapDispatchToProps)(TaskEdit);
