// Подтверждение формы и возвращение к таблице
export const submit = (event, editFunction, addFunction, entity, tab) => {
    event.preventDefault();
    if(entity.id){
      editFunction(entity)
    }
    else{
      addFunction(entity)
    }
    window.location.href ="/?tab=" + tab;
  }

// Изменеие сущности после изменения поля формы
export const change = (event, setFunction, entity) => {
  const { name, value } = event.target;
  setFunction({ ...entity, [name]: value });
}

// Хватаем сущность с сервера
export const getEntity = (entity, id, setFunction) => {
    return fetch(`/api/` + entity + `/${id}`)
     .then((response) => response.json())
     .then((data) => setFunction(data));
}

// Логика сортировки списков сущностей
export const sortLogic = (a, b, sorting) => {
    return a[sorting.field]>b[sorting.field] && sorting.increase ? 1 : -1;
}

// изменение параметров сортировки
export const changeSort = (event, sorting, setSorting) => {
  const name = event.target.getAttribute('name');
  const increase = name === sorting.field ? !sorting.increase : true;
  setSorting({['field']:name, ['increase']:increase});
}
