import '../App.css';

function ShowMeaning({words}) {
    return(

     <div className="meaning">
        <p>Meaning:{words.definition}</p>
        {/* <p>Synonym:{words.synonym}</p> */}
    </div>
    )
}

export default ShowMeaning;