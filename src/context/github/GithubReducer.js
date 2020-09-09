import * as _ from '../types';

export default (state, action)=>{

    switch (action.type){
        case _.SEARCH_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case _.SET_LOADING:
            return {
                ...state,
                loading: true,
            }   
        case _.GET_USER:
            return {
                ...state,
                user: action.payload,
                loading: false
            }        
        case _.GET_REPOS:
            return {
                ...state,
                repos: action.payload,
                loading: false
            }
        case _.CLEAR_USERS:
            return {
                ...state,
                users: [],
                loading: false
            }      
        default:
            return {...state}
    }

}