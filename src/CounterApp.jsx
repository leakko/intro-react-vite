import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState( value );

    const handleAdd = () => {
        setCounter( c => c + 1 )
    }

    const handleSubstract = () => {
        setCounter( c => c + -1 )
    }

    const handlereset = () => {
        setCounter( value )
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd }>
                +1
            </button>
            <button onClick={ handleSubstract }>
                -1
            </button>
            <button onClick={ handlereset }>
                Reset
            </button>
            
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}