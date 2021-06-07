import InputGroup from 'react-bootstrap/InputGroup'
import Highlighter from "react-highlight-words";

function DataInCategorySelectedToShow({dataToShow, searchWord}) {

    return <>
    <h1>DataInCategorySelectedToShow</h1>
    <InputGroup>
    <div className="overflow-auto m-5" style={{width:'150vh',height:'70vh'}}>
        <ul>
            {searchWord ?
            dataToShow
            .filter(joke => joke.includes(searchWord))
            .map(joke => <li><Highlighter searchWords={[searchWord]} textToHighlight={joke} autoEscape={true} highlightClassName='bg-warning'/></li>) :
            dataToShow.map(joke => <li>{joke}</li>)}
        </ul>
        </div>
  </InputGroup>
    </>
}
export default DataInCategorySelectedToShow