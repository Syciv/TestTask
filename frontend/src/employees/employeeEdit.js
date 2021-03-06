import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import { useState, useEffect } from 'react';
import {addEmployee, editEmployee} from '../redux/actions';
import {connect} from 'react-redux';
import useStyles from "../style";
import { submit, change, getEntity } from '../handles'

function EmployeeEdit(props) {

  const emptyEmployee = {
        name: '',
        filialid: '1',
        chiefid: '',
        postid: '1'
    };

  const [employee, setEmployee] = useState(emptyEmployee)

  const classes = useStyles();

  // Получаем редактируемую задачу
  useEffect(() => {
      if(props.match.params.id !== 'new'){
          getEntity('employees', props.match.params.id, setEmployee);
        }
      }, []);

  // Изменение инпутов
  const handleChange = event => {
        change(event, setEmployee, employee)
      }

  const title = <h2>{employee.id ? 'Редактировать сотрудника' : 'Добавить сотрудника'}</h2>;
  return <div className={classes.modal}>
        <Container  align="center">
            {title}
            <Form onSubmit={(event) => submit(event, props.editEmployee, props.addEmployee, employee, 0)}>
                <FormGroup>
                    <Label className={classes.label} for="name">Имя:</Label><br/>
                    <Input className={classes.input} type="text" name="name" id="name" value={employee.name || ''}
                            onChange={handleChange} autoComplete="name" required/>
                </FormGroup>
                <FormGroup>
                    <Label className={classes.label} align="left" for="filialid">Филиал:</Label><br/>
                    <Input className={classes.input} type="select" name="filialid" id="filialid" value={employee.filialid}
                           onChange={handleChange} autoComplete="filialid" required>
                           {props.filials.map(c =>
                             {return (
                              <option key={c.id} value={c.id}>
                                {c.name}
                              </option>)}
                            )};
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label className={classes.label} for="postid">Должность:</Label><br/>
                    <Input className={classes.input} type="select" name="postid" id="postid" value={employee.postid}
                           onChange={handleChange} autoComplete="postid">
                           {props.posts.map(c =>
                             {return (
                              <option key={c.id} value={c.id}>
                                {c.name}
                              </option>)}
                            )};
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label className={classes.label} for="chiefid">Руководитель:</Label><br/>
                    <Input className={classes.input} type="select" name="chiefid" id="chiefid" value={employee.chiefid || ''}
                           onChange={handleChange} autoComplete="chiefid">
                           <option value=''>Нет руководителя</option>
                           {props.employees.map(c =>
                             {return (
                              <option key={c.id} value={c.id}>
                                {c.name}
                              </option>)}
                            )};
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Button className={classes.button_com} type="submit">Сохранить</Button>{' '}
                    <Button className={classes.button_delete} tag={Link} to="/">Отменить</Button>
                </FormGroup>
            </Form>
        </Container>
    </div>
}

function mapStateToProps(state){
    const {employeeReducer, othersReducer} = state;
    console.log(othersReducer.filials);
    console.log(othersReducer.posts);
    return {
      employees: employeeReducer.employees,
      filials: othersReducer.filials,
      posts: othersReducer.posts
    }
}
const mapDispatchToProps = {
       addEmployee,
       editEmployee
  }


export default connect(mapStateToProps, mapDispatchToProps)(EmployeeEdit);
//export default withRouter(EmplloyeeEdit);
