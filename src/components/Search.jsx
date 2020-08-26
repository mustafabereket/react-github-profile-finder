import React, {useState} from "react";

function Search(props) {

    let [inputText, setInputText] = useState('');


    function printText() {
        console.log(inputText);
    }


    function handleChange(event) {
        let name = event.target.value;
        setInputText(name);
    }

    function submitName(event) {
        printText();
        event.preventDefault();
        props.onUserSubmit(inputText);
        setInputText('');
    }



    return (
        <div>
            <form>
                <input className='searchBox' onChange={handleChange} value={inputText}/>
                <button type='submit' onClick={submitName}> Search</button>
            </form>
        </div>
    )

}

export default Search;
