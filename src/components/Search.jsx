import React, {useState, useContext} from "react";
import GithubContext from "../context/github/githubContext";
import AlertContext from "../context/alert/AlertContext"
import Alert from "./Alert"
const Search = () => {

    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);
  
    let [inputText, setInputText] = useState('');


    function handleChange(event) {
        let name = event.target.value;
        setInputText(name);
    }

    function submitName(event) {
        event.preventDefault();

        if(inputText){
            githubContext.searchUsers(inputText)
            setInputText('');
        }else {
            alertContext.missingInput();
        }
    }



    return (
        <div>
            <form className='form'>
                <input className='searchBox' onChange={handleChange} value={inputText}/>
                <button className='btn btn-dark btn-block form-buttons' type='submit' onClick={submitName}> Search</button>
                {githubContext.users.length > 0 && <button className='btn btn-light btn-block form-buttons' onClick={githubContext.clearUsers}>Clear</button>}
                {alertContext.message && <Alert/>}
            </form>
        </div>
    )

}

export default Search;
