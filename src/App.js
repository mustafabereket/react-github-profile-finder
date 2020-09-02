import React, {useState, useEffect, Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Footer from "./components/Footer";
import Search from "./components/Search";
import Users from './components/user/Users';
import Navbar from './components/Navbar';
import Alert from "./components/Alert";
import About from "./components/pages/About";
import axios from 'axios';
import Spinner from "./components/Spinner";
import UserDetails from "./components/user/UserDetails";
const postUrl = `client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`

const App = () => {

    let [users, setUsers] = useState([]);
    let [spinnerDisplay, setSpinner] = useState(false);
    let [alertText, setAlert] = useState('');



    const fetchUsers = async (name) => {
        if(!name) {
            setAlert('Please Type In a UserName');
            setTimeout(()=>{
                setAlert('');
            }, 3000);
        } else {
            let api = `https://api.github.com/search/users?q=${name}&${postUrl}`;
            const userData = await axios.get(api);
            console.log(userData)
            setUsers( userData.data.items);
        }

    }

    const getUser = async (username) => {

        let userdata = await axios.get(`https://api.github.com/users/${username}`);
        return userdata.data;

    }

    const clearUsers = () => {
        setUsers([]);
    }

  return (
      <Router>
          <div className='mainContainer'>
              <Navbar/>
              <div className='container'>
                  {alertText ? <Alert alert={alertText}/> : null}
                  <Switch>
                      <Route
                          path='/'
                          exact
                          render={props => (
                              <Fragment>
                                  <Search
                                      onUserSubmit={fetchUsers}
                                      clearUsers={clearUsers}
                                      showClear={users.length > 0 ? true : false}
                                  />
                                  { spinnerDisplay ? <Spinner/> : <Users users={users} />}
                              </Fragment>
                          )}
                      />
                      <Route exact path='/about' component={About} />
                      <Route exact path='/users/:login' render={props => {
                          return (<UserDetails {...props} getUser={getUser}/>)
                      }}/>

                  </Switch>
              </div>
              <Footer/>
          </div>
      </Router>

  );
}

export default App;
