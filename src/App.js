import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Footer from "./components/Footer";
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from "./components/pages/About";
import UserDetails from "./components/user/UserDetails";
import GithubState from "./context/github/GithubState";
import NotFound from './components/pages/NotFound';

const App = () => {
  return (
    <GithubState>
      <Router>
        <div className='App'>
        <Navbar/>
              <div className='container'>
                  <Switch>
                      <Route path='/' exact component={Home} />
                      <Route exact path='/about' component={About} />
                      <Route exact path='/users/:login' component={UserDetails}/>
                      <Route component={NotFound}/>
                  </Switch>
              </div>
        </div>
      </Router>
      <Footer/>
    </GithubState>
  );
}

export default App;
