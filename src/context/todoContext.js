import React, {useState, useContext} from 'react';
let initialState = [];

const todoContext = React.createContext();

export function useTodosContext() {
    return useContext(todoContext);
}

export default function TodoContext({children}){
    const [todos, setTodos] = useState(initialState);

    return (
        <todoContext.Provider value={todos}>
            {children}
        </todoContext.Provider>
    )
} 