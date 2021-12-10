import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

class EmployeesList extends Component {

    constructor(props) {
        super(props);
        this.state = {employees: []};
        // this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('/employees/all')
            .then(response => response.json())
            .then(data => this.setState({employees: data}));
    }

    async remove(id) {
        await fetch(`/employees/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedEmployees = [...this.state.employees].filter(i => i.id !== id);
            this.setState({employees: updatedEmployees});
        });
    }

    render() {
        const {employees, isLoading} = this.state;

        if (isLoading) {
            return <p>Загрузка...</p>;
        }

        const emplList = employees.map(employee => {
            return <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.filial}</td>
                <td>{employee.chiefname}</td>
                <td>{employee.tasksnum}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/employees/" + employee.id}>Изменить</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(employee.id)}>Удалить</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>

                <Container fluid>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/employees/new">Добавить сотрудника</Button>
                    </div>
                    <h3>Сотрудники</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="15%" align="center">Имя</th>
                            <th width="15%">Филиал</th>
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
}

export default EmployeesList;
