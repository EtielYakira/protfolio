import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import ErrorMessages from "./ErrorMessages";
import { IoMdSchool } from "react-icons/io";

function SelectInput({ validateInput, data ,name, options}) {
  <Form.Group className="col mr-5">
    <Form.Label className="text-white">
      <u>Choose</u>
    </Form.Label>
    <InputGroup>
      <Form.Control
        as="select"
        name={name}
        defaultValue=""
      >
        <option>Choose {name}</option>
        {options.map((optionName) => (
          <option>{optionName}</option>
        ))}
      </Form.Control>
    </InputGroup>
  </Form.Group>;
}
