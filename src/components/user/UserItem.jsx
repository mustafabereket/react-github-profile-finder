import React from 'react'
import {Link} from "react-router-dom";

function UserItem(props) {
    const {user} = props;

    return (
        <div className='card text-center'>
            <img src={user.avatar_url} alt="avatar" className='user-avatar' />
            <h3>{user.login}</h3>
            <Link to={`/users/${user.login}`} className='btn btn-primary'>More</Link>
        </div>
    )
}

export default UserItem
