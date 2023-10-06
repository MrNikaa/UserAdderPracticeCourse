import React from 'react';
import Card from './UI/Card';
import './Error.css'


const Error = props => {

    const abortError = () => {
        props.setError(false);
    }

    return(
       <Card className='container'>
            <div className='error-container'>
                <h2 className='error-title'>Invalid Input</h2>
                <p className='error-message'>{props.errorMessage}</p>
                <button className='error-button' onClick={abortError}>Okay</button>
            </div>
       </Card>
    );
}

export default Error;