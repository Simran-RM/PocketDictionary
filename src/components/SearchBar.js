import { useState } from "react";
import '../App.css';


function SearchBar({ onSubmit}) {
    const [word, setWord] = useState('');

    const handleChange=(event)=>{
        setWord(event.target.value);
       
    }

    const handleFormSubmit=(event)=>{
        event.preventDefault();
        onSubmit(word);
    }
    
    return (
        <div className="form">
            <form onSubmit={handleFormSubmit}>
                <label>Enter Search term:</label>
                <input className="input" value={word} onChange={handleChange}/>
            </form>
            
            
        </div>
    )
}

export default SearchBar;