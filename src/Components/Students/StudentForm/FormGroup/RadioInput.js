import Form from 'react-bootstrap/Form'
import ToggleButton from 'react-bootstrap/ToggleButton'
import InputGroup from 'react-bootstrap/InputGroup'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ErrorMessages from '../ErrorMessages'

function RadioInput({validateInput, data ,name,radios}) {
    
          <Form.Group className="col">
          <Form.Label className="text-white">
            <u>Gender</u>
          </Form.Label>
          <InputGroup>
            <ButtonGroup toggle>
              {radios.map((radio, idx) => (
                <ToggleButton
                  key={idx}
                  type="radio"
                  className={
                    data.gender.errors.length
                      ? "is-invalid alert-danger"
                      : ""
                  }
                  variant="secondary"
                  name="gender"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={validateInput}
                >
                  {radio.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
          </InputGroup>
          <ErrorMessages errors={data[name].errors} />
        </Form.Group>
}