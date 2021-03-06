import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function BmiCalculator({onParameters, parameters, isOkToShow}) {
    return <>
    <Form className="container my-4 col-4">
 {(Object.keys(parameters)).map(parameter =>

    (<Form.Group>
       <Form.Label style={{fontSize:'43px'}}>{parameter}</Form.Label>
       <Form.Control className='' onBlur={e => onParameters(e.target.name, e.target.value)} name={parameter} type="number" placeholder={`Enter ${parameter}`} />
     </Form.Group>)
 )}

  <Button variant="info" type="button" onClick={() => isOkToShow()}>
    Submit
  </Button>
</Form>
</>
}

export default BmiCalculator
