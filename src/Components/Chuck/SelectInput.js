import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function SelectInput({categoryList, name, onChoosingCategory}) {
    return <>
    <div className='container'>
    <h2>Joke Category</h2>
    <div className=''>
    <Form.Group className="col m-5">
    <InputGroup>
      <Form.Control
        as="select"
        name={name}
        defaultValue=""
        onChange={onChoosingCategory}
      >
        <option>Choose {name}</option>
        {categoryList.map((optionName) => (
          <option>{optionName}</option>
        ))}
      </Form.Control>
    </InputGroup>
  </Form.Group>;
  </div>
  </div>
    </>
}


export default SelectInput