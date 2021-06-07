import InputGroup from 'react-bootstrap/InputGroup'
import Highlighter from "react-highlight-words";

function DataInCategorySelectedToShow({dataToShow, searchWord}) {

    return <>
    <InputGroup className="col">
    <div className="overflow-auto m-5 border border-5 bg-white" style={{width:'100vh',height:'50vh'}}>
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