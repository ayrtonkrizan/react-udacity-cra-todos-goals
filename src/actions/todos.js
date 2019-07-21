import API from 'goals-todos-api'

export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

function addTodo (todo) {
    return {
      type: ADD_TODO,
      todo,
    }
}

function removeTodo (id) {
    return {
        type: REMOVE_TODO,
        id,
    }
}

function toggleTodo (id) {
    return {
        type: TOGGLE_TODO,
        id,
    }
}

export function handleAddTodo(value, cb) {
    return dispatch => {
      API.saveTodo(value)
        .then(todo =>{
            dispatch(addTodo(todo));
            cb();
        })
        .catch(() => {
            alert('Fail to save todo On API.')
        })
}
}

export function handleToggle(id){
return dispatch => {
    dispatch(toggleTodo(id))
    return API.saveTodoToggle(id)
        .catch(() => {
            alert('Fail to update toggle from API');
            dispatch(toggleTodo(id));
        })
    }
}

export function handleDeleteTodo (todo) {
    return (dispatch) =>{
        dispatch(removeTodo(todo.id))
        return API.deleteTodo(todo.id)
            .catch(()=> {
                alert("Fail to delete from API");
                dispatch(addTodo(todo))
            })
    }
}