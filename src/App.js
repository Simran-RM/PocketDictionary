import SearchBar from './components/SearchBar'
import searchWord from './api';
import ShowMeaning from './components/ShowMeaning';
import Header from './components/Header';
import { useState } from 'react';
import './App.css';

function App () {

    const [words, setWords] =useState('');
    
    const handleSubmit=async(word)=>{
        const result = await searchWord(word);
        setWords(result);
    };

    return(
        <div className='App'>
            <Header />
            <SearchBar onSubmit={handleSubmit} />
            <ShowMeaning words={words}/>
        </div>
    )
}

export default App;