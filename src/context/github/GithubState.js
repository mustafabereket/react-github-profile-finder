import React, {useReducer} from "react";
import GithubContext from "./githubContext";
import GithubReducer from "./GithubReducer"
import axios from "axios";
import * as _ from '../types';
const postUrl = `client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`


const GithubState = (props) => {
    const initialState = {
        user: {},
        users: [],
        loading: false,
        repos: []
    }
    const [state, dispatch] = useReducer(GithubReducer, initialState);

    //Search Users
    const searchUsers = async (userName) => {
        setLoading();
        let api = `https://api.github.com/search/users?q=${userName}&${postUrl}`;
        const userData = await axios.get(api);
        dispatch({
            payload: userData.data.items,
            type: _.SEARCH_USERS
        })
    }

    // Set Loading
    const setLoading = () => dispatch({type: _.SET_LOADING});

    // Get User
    const getUser = async (userName) => {
        setLoading();
        let api = `https://api.github.com/users/${userName}?${postUrl}`;
        let userData = await axios.get(api);
        dispatch({
            type: _.GET_USER,
            payload: userData.data
        })
        
    }
    // Get Repos
    const getRepos = async (username) => {
        setLoading();
        let api = `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&{postUrl}`;
        const repos = await axios.get(api);
        dispatch({
            type: _.GET_REPOS,
            payload: repos.data
        })
    }
    
    // Clear Users
    const clearUsers = () => {
        setLoading();
        dispatch({type: _.CLEAR_USERS});
    }


    return (
        <GithubContext.Provider value={{
            users: state.users,
            user: state.user,
            loading: state.loading,
            repos: state.repos,
            searchUsers,
            getUser,
            getRepos,
            clearUsers        
        }} >
            {props.children}
        </GithubContext.Provider>
    )
}

export default GithubState;