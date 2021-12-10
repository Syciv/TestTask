import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';


class EmplloyeeEdit extends Component {

    emptyItem = {
        name: '',
        email: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
      if (this.props.match.params.id !== 'new') {
          const employee = await (await fetch(`/employees/${this.props.match.params.id}`)).json();
          this.setState({item: employee});
      }
    }

    handleChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      let item = {...this.state.item};
      item[name] = value;
      this.setState({item});
    }

    async handleSubmit(event) {
      event.preventDefault();
      const {item} = this.state;

      await fetch('/employees' + (item.id ? '/' + item.id : ''), {
        method: (item.id) ? 'PUT' : 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item),
      });
    this.props.history.push('/employees');
    }

    render() {
    const {item} = this.state;
    const title = <h2>{item.id ? 'Редактировать сотрудника' : 'Добавить сотрудника'}</h2>;
    return <div>
        <Container>
            {title}
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="name">Имя:</Label>
                    <Input type="text" name="name" id="name" value={item.name || ''}
                           onChange={this.handleChange} autoComplete="name"/>
                </FormGroup>
                <FormGroup>
                    <Label for="filial">Филиал:</Label>
                    <Input type="text" name="filial" id="filial" value={item.filial || ''}
                           onChange={this.handleChange} autoComplete="filial"/>
                </FormGroup>
                <FormGroup>
                    <Label for="post">Должность:</Label>
                    <Input type="text" name="post" id="post" value={item.post || ''}
                           onChange={this.handleChange} autoComplete="post"/>
                </FormGroup>
                <FormGroup>
                    <Label for="chief">Руководитель:</Label>
                    <Input type="select" name="chief" id="chief" value={item.chief || ''}
                           onChange={this.handleChange} autoComplete="chief"/>
                </FormGroup>
                <FormGroup>
                    <Button color="primary" type="submit">Сохранить</Button>{' '}
                    <Button color="secondary" tag={Link} to="/employees">Отменить</Button>
                </FormGroup>
            </Form>
            <h5>{item.chiefname}</h5>
        </Container>
    </div>
  }
}

export default withRouter(EmplloyeeEdit);
