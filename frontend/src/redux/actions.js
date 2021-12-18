export function addEmployee(employee){
  return async dispatch => {
    fetch(`/api/employees`, {
                 method: 'POST',
                 headers: {
                     'Accept': 'application/json',
                     'Content-Type': 'application/json'
                 },
                 body:  JSON.stringify(employee)
    }).then(res => res.json())
    .then(employee =>
      dispatch({
        type:'ADD_EMPLOYEE',
        employee
      }))
  }
}

export function editEmployee(employee){
  return async dispatch => {
    fetch(`/api/employees/${employee.id}`, {
                method:'PUT',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body:  JSON.stringify(employee)
    }).then(res => res.json())
    .then(employee =>
      dispatch({
        type:'EDIT_EMPLOYEE',
        employee
      }))
  }
}

export function removeEmployee(id){
  return async dispatch => {
      await fetch(`/api/employees/${id}`, {
                  method: 'DELETE',
                }).then(res => {
                        // Проверка, возможно ли удалить сотрудника
                        if(!res.ok){
                            res.text().then(function (text) {
                                  alert(text);
                            });
                        } else{
                          dispatch({
                            type:'REMOVE_EMPLOYEE',
                            id
                          })
                        }
      })
  }
}

export function loadEmployees(){
  return async dispatch => {
    const response = await fetch('/api/employees/all');
    const jsonData = await response.json();
    dispatch({
      type:'LOAD_EMPLOYEES',
      data: jsonData
    })
  }
}

export function addTask(task){
  return async dispatch => {
    fetch(`/api/tasks`, {
                method:'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(task)
    }).then(res => res.json())
    .then(task =>
      dispatch({
        type:'ADD_TASK',
        task
      }))
  }
}

export function editTask(task){
  return async dispatch => {
    fetch(`/api/tasks/${task.id}`, {
                method:'PUT',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(task)
    }).then(res => res.json())
    .then(task =>
      dispatch({
        type:'EDIT_TASK',
        task
      }))
  }
  }

export function removeTask(id){
  return async dispatch => {
    fetch(`/api/tasks/${id}`, {
                 method: 'DELETE'
    }).then(() =>
      dispatch({
        type:'REMOVE_TASK',
        id
      }))
  }
}

export function loadTasks(){
  return async dispatch => {
    const response = await fetch('/api/tasks/all');
    const jsonData = await response.json();
    dispatch({
      type:'LOAD_TASKS',
      data: jsonData
    })
  }
}

export function loadFilials(){
  return async dispatch => {
    const response = await fetch('/api/filials/all');
    const jsonData = await response.json();
    dispatch({
      type:'LOAD_FILIALS',
      data: jsonData
    })
  }
}

export function loadPosts(){
  return async dispatch => {
    const response = await fetch('/api/posts/all');
    const jsonData = await response.json();
    dispatch({
      type:'LOAD_POSTS',
      data: jsonData
    })
  }
}
