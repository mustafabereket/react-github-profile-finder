import React, {useContext} from 'react';
import GithubContext from '../../context/github/githubContext';
import Spinner from '../Spinner';
import UserItem from './UserItem';

function Users() {
    const githubContext = useContext(GithubContext);
    if(githubContext.loading) return <Spinner/>;
    return (
        <div className="user-container">
            {githubContext.users.map((user, index) => <UserItem key={index} user={user} />)}
        </div>
    )
}

export default Users
