import React, {useReducer} from 'react';
import AlertContext from './AlertContext';
import AlertReducer from './AlertReducer'
import * as _ from '../types'
const AlertState = (props) => {

    const initialState = {
        type: '',
        message: '',
        delay: 3500
    }

    const [state, dispatcher] = useReducer(AlertReducer, initialState);

    const missingInput = () => {
        dispatcher({type: _.MISSING_INPUT});
        setTimeout(()=>{
            dispatcher({type: _.REMOVE_ALERT})
        }, state.delay);
    }


    return (
        <AlertContext.Provider value={{
            message: state.message, 
            type: state.type,
            missingInput}}>
            {props.children}
        </AlertContext.Provider>
    )

}

export default AlertState;