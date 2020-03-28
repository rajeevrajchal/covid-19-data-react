import React from 'react';
import spinner from './spinner.gif'
import './Spinner.css'

const Spinner = () => (
    <div className="spinner">
        <img src={spinner} alt="spinner"/>
        <div className="text">
            Stay Home Stay Safe
        </div>
    </div>
)

export default Spinner