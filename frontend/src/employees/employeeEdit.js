import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import { useState, useEffect } from 'react';
import {addEmployee, editEmployee} from '../redux/actions';
import {connect} from 'react-redux';


function EmployeeEdit(props) {

  const emptyEmployee = {
        name: '',
        filial: '',
        chiefid: '',
        post: ''
    };

  const [employee, setEmployee] = useState(emptyEmployee)

  const getEmployee = () => {
       return fetch(`/api/employees/${props.match.params.id}`)
          .then((response) => response.json())
          .then((data) => {setEmployee(data);  console.log(data)});
        }

    useEffect(() => {
      if(props.match.params.id !== 'new'){
          getEmployee();
        }
      }, []);

  const handleChange = event => {
        const { name, value } = event.target;
        setEmployee({ ...employee, [name]: value });
      }

  const handleSubmit = event => {
      event.preventDefault();

      if(employee.id){
        props.editEmployee(employee)
      }
      else{
        props.addEmployee(employee)
      }
     window.location.href ="/employees";
    }


    const title = <h2>{employee.id ? 'Редактировать сотрудника' : 'Добавить сотрудника'}</h2>;
    return <div>
        <Container>
            {title}
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="name">Имя:</Label>
                    <Input type="text" name="name" id="name" defaultValue={employee.name || ''}
                            onChange={handleChange} autoComplete="name"/>
                </FormGroup>
                <FormGroup>
                    <Label for="filial">Филиал:</Label>
                    <Input type="text" name="filial" id="filial" defaultValue={employee.filial || ''}
                           onChange={handleChange} autoComplete="filial"/>
                </FormGroup>
                <FormGroup>
                    <Label for="post">Должность:</Label>
                    <Input type="text" name="post" id="post" defaultValue={employee.post || ''}
                           onChange={handleChange} autoComplete="post"/>
                </FormGroup>
                <FormGroup>
                    <Label for="chiefid">Руководитель:</Label>
                    <Input type="select" name="chiefid" id="chiefid" defaultValue={employee.chiefid || ''}
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
                    <Button color="primary" type="submit">Сохранить</Button>{' '}
                    <Button color="secondary" tag={Link} to="/employees">Отменить</Button>
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
       addEmployee,
       editEmployee
  }


export default connect(mapStateToProps, mapDispatchToProps)(EmployeeEdit);
//export default withRouter(EmplloyeeEdit);
