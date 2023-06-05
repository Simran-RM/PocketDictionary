import axios from 'axios';

const API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en';


const searchWord = async(word) => {
    try{
        const response = await axios.get(`${API_URL}/${word}`);
        return (response.data[0].meanings[0].definitions[0]);
    } catch(error) {
        console.error('Error fetching word definition:', error);
        return null;
    }
    
};

export default searchWord;


// const API_KEY = '46bf7885-35f5-433e-84aa-d9cedad3914d';
// const API_URL = 'https://www.dictionaryapi.com/api/v3/references/collegiate/json/';

// const searchWord =async(word) =>{
//     const response = await axios.get(`${API_URL}/${word}?key=${API_KEY}`);
//     console.log(response.data[0].def[0]);
//     return response.data;
// }

// export default searchWord;