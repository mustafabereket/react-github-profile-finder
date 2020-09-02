import React, {Component} from 'react';

const Alert = ({alert}) => {
    return (
        <div className='alert alert-light'>
            <i className='fas fa-into-circle'></i> {alert}
        </div>
    );
}

export default Alert;
