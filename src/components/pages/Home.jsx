import React, { Fragment } from 'react'
import Search from '../Search'
import Users from '../user/Users'
import AlertState from '../../context/alert/AlertState'

const Home = () =>  {
    return (
        <Fragment>
            <AlertState>
                <Search/>
                <Users/>
            </AlertState> 
        </Fragment>
    )
}

export default Home;
