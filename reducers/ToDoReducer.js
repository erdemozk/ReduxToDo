const initialState = {
    todos: [
        {
            id: 1,
            text: 'Deneme',
            completed: false
        }
    ]
}

export default function reducer (state = initialState, { type, payload }) {
    switch (type) {

    case "ADDTODO":
        return { ...state, todos: [payload, ...state.todos] }

    case "DELETETODO":
        return { ...state, todos: state.todos.filter((todos) => todos.id !== payload ) }
    
    case "CHANGECOMP":
        return { ...state, todos: state.todos.map((todo) => {
            return todo.id === payload ? {...todo, completed : !todo.completed} : todo
          })}

    default:
        return state
    }
}
