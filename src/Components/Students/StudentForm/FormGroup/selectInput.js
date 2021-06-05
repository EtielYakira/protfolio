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
      <InputGroup.Prepend>
        <InputGroup.Text>
          <IoMdSchool />
        </InputGroup.Text>
      </InputGroup.Prepend>
      <Form.Control
        as="select"
        name="course"
        defaultValue=""
        onChange={validateInput}
        className={data.course.errors.length ? "is-invalid alert-danger" : ""}
      >
        <option>Choose {name}</option>
        {options.map((optionName) => (
          <option>{optionName}</option>
        ))}
      </Form.Control>
    </InputGroup>
    <ErrorMessages errors={data.course.errors} />
  </Form.Group>;
}
