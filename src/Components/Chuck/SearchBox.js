import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import {ImSearch} from 'react-icons/im'


function SearchBox({onChangeSearchWord}) {
    return <>
    <div className='col-3'>
    <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">
          <ImSearch/>
      </InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Control
      placeholder="search"
      aria-label="search"
      aria-describedby="basic-addon1"
      onChange={onChangeSearchWord}
    />
  </InputGroup>
  </div>
    </>
}


export default SearchBox