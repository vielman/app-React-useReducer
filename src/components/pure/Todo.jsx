import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({id, text, completed, onClick }) => {
  return (
    <li onClick={onClick} style={ 
        { 
            textDecoration: completed ? 'line-through' : 'none',
            textDecorationColor: completed ? 'green' : 'none',
            color: completed ? 'green' : 'white'
        }
    }>
        {id} - {text}
    </li>
  )
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
}

export default Todo