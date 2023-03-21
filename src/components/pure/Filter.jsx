import React from 'react'
import PropTypes from 'prop-types'

const Filter = ({active, onClick, filters, children}) => {
    if (active) {
        return (<span ClassNames='active'>{children}</span>) 
    }
    return (
        <button className='filter'
            onClick={ (e) => {
                e.preventDefault();
                onClick(filters);
            }}
        >
            {children}
        </button>
    )
}

Filter.propTypes = {
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
}

export default Filter