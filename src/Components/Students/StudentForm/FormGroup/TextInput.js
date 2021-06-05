import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import ErrorMessages from '../ErrorMessages'

function TextInput({ validateInput, data ,name, icon, as, type, placeholder}) {
    

<Form.Group as={Col}>
<Form.Label className="text-white">
  <u>{name}</u>
</Form.Label>
<InputGroup>
  <InputGroup.Prepend>
    <InputGroup.Text>
      {icon}
    </InputGroup.Text>
  </InputGroup.Prepend>
  <Form.Control
    name={name}
    type={type}
    as={as}
    rows={3}
    className={
      data[name].errors.length
        ? "is-invalid alert-danger"
        : ""
    }
    onBlur={validateInput}
    placeholder={placeholder}
  />
</InputGroup>
<ErrorMessages errors={data.address.errors} />
</Form.Group>
}
