const initialState = {
  tasks: []
}

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      state.tasks.push(action.task)
      return {
        ...state,
        tasks: state.tasks
    }
    case 'EDIT_TASK':
      const tasks = state.tasks.filter((task) => task.id !== action.task.id)
      tasks.push(action.task)
      return {
          ...state,
          tasks: tasks
        }
    case 'REMOVE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter((task) => task.id !== action.id)
        };
    case 'LOAD_TASKS':
      const tasksNew = action.data.map(res => {
        console.log(res);
        return {
          id: res.id,
          priority: res.priority,
          description: res.description,
          employeeid: res.employeeid,
          employeename: res.employeename
        }
      })
      return {
      ...state,
      tasks: tasksNew
      }
    default:
      return state;
  }
}
