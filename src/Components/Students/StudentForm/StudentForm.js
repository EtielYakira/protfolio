import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import { FaUserAlt, FaMailBulk, FaCity } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";
import ErrorMessages from "./ErrorMessages";

function StudentForm({ addStudent, handleClose }) {
  
  const [radioValue, setRadioValue] = useState("");

  const radios = [
    { name: `Male`, value: `Male` },
    { name: "Female", value: "Female" },
    { name: "Other", value: "Other" },
  ];

  let isValid = (e) => {
    let wrongInfoCnt = 0;
    let detailsObj = {};
    for (const key in data) {
      const value = data[key].value || "";
      const name = key;
      if (!value) {
        wrongInfoCnt++;
        validateInput({ target: { value, name } });
      } else {
        detailsObj[name] = value;
      }
    }
    if (wrongInfoCnt === 0) {
      addStudent(detailsObj);
      handleClose();
    }
  };

  const [data, setData] = useState({
    email: {
      value: "",
      errors: [],
      valid: false,
      validations: {
        required: true,
        pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      },
    },
    username: {
      value: "",
      errors: [],
      valid: false,
      validations: {
        required: true,
        pattern: /^[a-zA-Z0-9]{2,}$/,
      },
    },
    address: {
      value: "",
      errors: [],
      valid: false,
      validations: {
        required: true,
        pattern: /^[a-zA-Z0-9\s,.'-]{10,}$/,
      },
    },
    course: {
      value: "",
      errors: [],
      valid: false,
      validations: {
        required: true,
      },
    },
    gender: {
      value: "",
      valid: false,
      errors: [],
      validations: {
        required: true,
      },
    },
  });

  const validateInput = ({ target: { value, name } }) => {
    const newErrors = [];
    const { validations } = data[name];

    if (validations.required && !value) {
      newErrors.push(`${name} is required`);
    }
    if (validations.pattern && !validations.pattern.test(value)) {
      if (name === "username") {
        newErrors.push("User name need to be 2 or more char");
      } else if (name === "address") {
        newErrors.push("User name need to be 10 or more char");
      } else {
        newErrors.push(`Invalid ${name} value`);
      }
    }
    if (name === "gender") {
      setRadioValue(value);
    }

    if (value === "Choose Course") {
      newErrors.push(`${name} is required`);
    }

    setData((data) => ({
      ...data,
      [name]: {
        ...data[name],
        valid: newErrors.length === 0 ? true : false,
        value: value,
        errors: newErrors,
      },
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };








  
  return (
    <>
      <Form
        onSubmit={onSubmit}
        className="container p-4"
        style={{ backgroundColor: "rgba(44, 100, 50, 0.7)" }}
      >
        <h2 className="text-center text-white">
          <u>
            <strong>Student Details</strong>
          </u>
        </h2>
        <h5 className="text-center text-white ">
          Hello student! Please fill your details
        </h5>
        <hr />





        
        <Form.Row>
          <Form.Group as={Col} className="mr-5">
            <Form.Label className="text-white">
              <u>Username</u>
            </Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <FaUserAlt />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                name="username"
                type="text"
                placeholder="Enter Username"
                className={
                  data.username.errors.length
                    ? "is-invalid alert-danger"
                    : ""
                }
                onBlur={validateInput}
              />
            </InputGroup>
            <ErrorMessages errors={data.username.errors} />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label className="text-white">
              <u>Email</u>
            </Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <FaMailBulk />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter Email"
                className={
                  data.email.errors.length ? "is-invalid alert-danger" : ""
                }
                onBlur={validateInput}
              />
            </InputGroup>
            <ErrorMessages errors={data.email.errors} />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label className="text-white">
              <u>Adress</u>
            </Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <FaCity />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                name="address"
                as="textarea"
                rows={3}
                className={
                  data.address.errors.length
                    ? "is-invalid alert-danger"
                    : ""
                }
                onBlur={validateInput}
                placeholder="Street, Number, City, Zip "
              />
            </InputGroup>
            <ErrorMessages errors={data.address.errors} />
          </Form.Group>
        </Form.Row>

        <Form.Row>
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
                className={
                  data.course.errors.length
                    ? "is-invalid alert-danger"
                    : ""
                }
              >
                <option>Choose Course</option>
                <option>JAVA</option>
                <option>PYTHON</option>
                <option>HTML</option>
                <option>REACT</option>
              </Form.Control>
            </InputGroup>
            <ErrorMessages errors={data.course.errors} />
          </Form.Group>

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
            <ErrorMessages errors={data.gender.errors} />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Button as={Col} type="submit" variant="dark" onClick={isValid}>
            Submit
          </Button>
        </Form.Row>
      </Form>
    </>
  );
}

export default StudentForm;
