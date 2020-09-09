import * as _ from '../types';

export default (state, action)=>{
    switch (action.type){
        case _.MISSING_INPUT: 
            return {
                ...state,
                message: 'Please Provide An Input To Search',
                type: 'danger'
            }
        case _.REMOVE_ALERT: 
            return {
                delay: 3500,
                message: '',
                type: ''
            }            
        default:
            return {...state}
    }
}