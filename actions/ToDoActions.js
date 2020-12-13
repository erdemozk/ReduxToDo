export const ToDoAdd = (todotext) => (dispatch) => {
    const todo = {
        id: Math.floor(Math.random()*1000),
        text: todotext,
        completed: false
    }

    dispatch({
        type: "ADDTODO",
        payload: todo
    })
}

export const ToDoDelete = (todokey) => (dispatch) => {
  dispatch({
      type: "DELETETODO",
      payload: todokey
  })
}

export const ToDoCompleted = (todocomp) => (dispatch) => {
  dispatch({
      type: "CHANGECOMP",
      payload: todocomp
  })
}

