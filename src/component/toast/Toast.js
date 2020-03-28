import React from 'react';
import './Toast.css';

const Toast = (props) => {
    const { msg = "I love react ", type = "success", display } = props;

    return (
        display ?
            <div className={`alert alert-${type}`}>
                <p>{msg}</p>
            </div> : null
    )
}
export default Toast
