const initialState = {
  employees: []
}

export const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_EMPLOYEE':
      state.employees.push(action.employee)
      return {
        ...state,
        employees: state.employees
      }
    case 'EDIT_EMPLOYEE':
      const employees = state.employees.filter((employee) => employee.id !== action.employee.id)
      employees.push(action.employee)
      return {
          ...state,
          employees: employees
      }
    case 'REMOVE_EMPLOYEE':
      const empl = state.employees.map(e => {console.log(Number(action.id));
        console.log(e.id);
        console.log(e.id === Number(action.id))})
      return {
        ...state,
        employees: state.employees.filter((employee) => employee.id !== action.id)
      };
    case 'LOAD_EMPLOYEES':
      const employeesNew = action.data.map(res => {
        return {
          id: res.id,
          name: res.name,
          postid: res.postid,
          postname: res.postname,
          filialname: res.filialname,
          filialid: res.filialid,
          chiefid: res.chiefid,
          chiefname: res.chiefname,
          tasksnum: res.tasksnum
        }
      })
      return {
      ...state,
      employees: employeesNew
      }
    default:
      return state;
  }
}
