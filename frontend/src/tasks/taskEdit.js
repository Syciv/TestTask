import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import { useState, useEffect } from 'react';
import {addTask, editTask} from '../redux/actions';
import {connect} from 'react-redux';


function TaskEdit(props) {

    const emptyTask = {
        description: '',
        priority: '',
        employeeid: '1'
    };

    const [task, setTask] = useState(emptyTask)

    const getTask = () => {
       return fetch(`/api/tasks/${props.match.params.id}`)
          .then((response) => response.json())
          .then((data) =>  {setTask(data);  console.log(data)});
        }

    useEffect(() => {
      if(props.match.params.id !== 'new'){
          getTask();
      }
      }, []);

    const handleChange = event => {
      const { name, value } = event.target;
      setTask({ ...task, [name]: value });
    }

    const handleSubmit = event => {
      event.preventDefault();
      console.log(task)
      if(task.id){
        props.editTask(task)
      }
      else{
        props.addTask(task)
      }
      window.location.href ="/tasks";
    }

    const title = <h2>{task.id ? 'Редактировать задачу' : 'Добавить задачу'}</h2>;
    return <div>
        <Container>
            {title}
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="description">Описание:</Label>
                    <Input type="textarea" name="description" id="description" value={task.description || ''}
                           onChange={handleChange} autoComplete="description"/>
                </FormGroup>
                <FormGroup>
                    <Label for="priority">Приоритет:</Label>
                    <Input type="number" min="1" max="9" onkeypress="return false" name="priority" id="priority" value={task.priority || ''}
                           onChange={handleChange} autoComplete="priority"/>
                </FormGroup>
                <FormGroup>
                    <Label for="employeeid">Исполнитель:</Label>
                    <Input type="select" name="employeeid" id="employeeid" value={task.employeeid || 1}
                           onChange={handleChange} autoComplete="employeeid">
                           {props.employees.map(e =>
                             {return (
                              <option key={e.id} value={e.id}>
                                {e.name}
                              </option>)}
                            )};
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Button color="primary" type="submit">Сохранить</Button>{' '}
                    <Button color="secondary" tag={Link} to="/tasks">Отменить</Button>
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
