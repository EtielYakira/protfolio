import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function SelectInput({categoryList, name, onChoosingCategory}) {
    return <>
    <h1>SelectInput</h1>
    <Form.Group className="col mr-5">
    <Form.Label className="text-white">
      <u>Choose</u>
    </Form.Label>
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
    </>
}


export default SelectInput