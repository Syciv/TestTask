import React, { Component } from 'react'

class App extends Component {
  state = {
    employees: []
  };

  async componentDidMount() {
    const response = await fetch('/employees/all');
    const body = await response.json();
    this.setState({employees: body});
  }

  render() {
    const {employees} = this.state;
    return (
        <div className="App">
          <header className="App-header">
            <div className="App-intro">
              <h2>Сотрудники</h2>
              {employees.map(employee =>
                  <div key={employee.id}>
                    {employee.name}
                  </div>
              )}
            </div>
          </header>
        </div>
    );
  }
}
export default App;
