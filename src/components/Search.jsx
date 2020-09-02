import React, {useState} from "react";

const Search= ({onUserSubmit, clearUsers, showClear}) => {

    let [inputText, setInputText] = useState('');


    const printText = () => {
        console.log(inputText);
    }


    function handleChange(event) {
        let name = event.target.value;
        setInputText(name);
    }

    function submitName(event) {
        printText();
        onUserSubmit(inputText);
        setInputText('');
        event.preventDefault();
    }



    return (
        <div>
            <form>
                <input className='searchBox' onChange={handleChange} value={inputText}/>
                <button type='submit' onClick={submitName}> Search</button>
                {showClear && <button className='btn btn-light btn-block' onClick={clearUsers}>Clear</button>}
            </form>
        </div>
    )

}

export default Search;
