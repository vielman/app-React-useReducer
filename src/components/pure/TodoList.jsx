import React, { useReducer, useState } from 'react'
import Todo from './Todo'
import { useTodosContext } from '../../context/todoContext';
import TodoForm from './TodoForm';
import Filter from './Filter'

// Incremental  ID for Todos
let nextTodoID = 1;

//Actions Types:
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const SHOW_ALL = 'SHOW_ALL';
const SHOW_ACTIVE =   'SHOW_ACTIVE';
const SHOW_COMPLETED = 'SHOW_COMPLETED';

const TodoList = () => {

    const todos = useTodosContext();
    const [all, setAll] = useState(true)
    const [active, setActive] = useState(false)
    const [completed, setCompleted] = useState(false)
    
    const todosReducer = (state = todos, action) => {
        switch (action.type) {
            case ADD_TODO:
                return [
                    ...state,
                    {
                        id: action.payload.id,
                        text: action.payload.text,
                        completed: false
                    }
                ]
            case TOGGLE_TODO:
                return state.map( (todo) => 
                    (todo.id === action.payload.id)
                    ? 
                    {
                        ...todo,
                        completed: !todo.completed
                    }
                    :
                    todo
                )
            case SHOW_ALL:
                setAll(true);
                setActive(false);
                setCompleted(false);
                return state;
  
            case SHOW_ACTIVE:
                setAll(false);
                setActive(true);
                setCompleted(false);
                return state.filter( (todo) => todo.completed === false) ;
    
            case SHOW_COMPLETED:
                setAll(false);
                setActive(false);
                setCompleted(true)
                return state.filter( (todo) => todo.completed);
               
            default:
                return state;
        }
    }

    const addTodo = (text) => {
        dispatch({
            type: ADD_TODO,
            payload: {
                id: nextTodoID ++,
                text
            }
        })
    }

    const toggleTodo = (id) => {
        dispatch({
            type: TOGGLE_TODO,
            payload: {
                id
            }
        })
    }

    const fiterTodo = (filter) => {
        dispatch({
            type: filter
        })
    }

    const [state, dispatch] = useReducer(todosReducer, todos)

    return (
        <div>
            <h1> Your TODOs</h1>
            <ul>
            {
            state.map( (todo, index) => 
                (
                    <Todo key={index}
                    id={todo.id}
                    text={todo.text}
                    completed={todo.completed}
                    onClick={
                        () => toggleTodo(todo.id)
                    }
                         
                    />
                )
            )
            }
            </ul>
            <div>
                <TodoForm submit={(text) => {addTodo(text)}}></TodoForm>
            </div>
            
            <div className='filters'>
                <Filter active={all} filters={SHOW_ALL} onClick={ (action) => {fiterTodo(action)}}> ALL</Filter>
                <Filter active={completed } filters={SHOW_COMPLETED} onClick={(action) => {fiterTodo(action)}}> COMPLETED</Filter>
                <Filter active={active} filters={SHOW_ACTIVE} onClick={ (action) => {fiterTodo(action)}}> ACTIVE</Filter>
            </div>
        </div>
    )
}

export default TodoList