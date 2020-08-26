import React, {useState} from 'react';
import './App.css';
import Footer from "./components/Footer";
import Search from "./components/Search";
import Profile from "./components/Profile";

function App() {
    let [user, setUser] = useState(null);

    async function getProfile(name) {

        const getuser = await fetch(`https://api.github.com/users/${name}`);
        const profile = await getuser.json();
        setUser(profile);
        console.log(profile);

    }

  return (
    <div className='mainContainer'>
      <Search onUserSubmit={getProfile} />
        {user && <Profile user={user}/>}
      <Footer/>
    </div>
  );
}

export default App;
