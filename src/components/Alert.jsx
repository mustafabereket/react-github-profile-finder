import React, {useContext} from 'react';
import AlertContext from "../context/alert/AlertContext"
const Alert = () => {
    let alertContext = useContext(AlertContext)
    return (
        <div className='alert alert-light'>
            <i className='fas fa-into-circle'></i> {alertContext.message}
        </div>
    );
}

export default Alert;
