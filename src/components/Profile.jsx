import React from "react";

function Profile(props) {
    return (
        <div className='profile'>
            <img alt='avatar' src={props.user.avatar_url}/>
        </div>
    )
}

export default Profile;
