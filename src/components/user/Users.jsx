import React, {useState} from 'react';
import UserItem from './UserItem';

function Users(props) {
    console.log(props.users)
    return (
        <div className="user-container">
            {props.users.map((user, index) => <UserItem key={index} user={user} />)}
        </div>
    )
}

export default Users
