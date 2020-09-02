import React, {useEffect, useState} from 'react'

function UserDetails(props) {

    let [userInfo, setUser] = useState({});

    useEffect(()=>{
        let callMe = async () => {
            setUser(await props.getUser(props.match.params.login))
            console.log('da', userInfo)
        }
        callMe();
    }, [])

    return (
        <div className='card text-center'>
            <img src={userInfo.avatar_url} alt="avatar" className='user-avatar' />
            <h3>{userInfo.login}</h3>
            {Object.keys(userInfo).map(obj => <div>{userInfo[obj]}</div>)}
        </div>
    )
}

export default UserDetails
