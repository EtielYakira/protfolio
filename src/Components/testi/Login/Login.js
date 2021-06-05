import { useState } from "react";

import ErrorMessages from './ErrorMessages';

function Login({ onLogin, errorMsg }) {

  const [loginData, setLoginData] = useState({
    email: {
      value: '', 
      errors:[], 
      validations:{
        required: true, 
        pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ 
      }
    },
    username: {
      value: '', 
      errors: [], 
      validations: {
        required: true, 
        pattern: /^[a-zA-Z]{2,}$/g
      }
    },
    address: {
    value: '', 
      errors: [], 
      validations: {
        required: true, 
        pattern: /^[0-9a-zA-Z]{10,}$/g
      }
    },
    course: {
    value: '', 
      errors: [], 
      validations: {
        required: true, 
      }
    },
    gender: {
    value: '', 
      errors: [], 
      validations: {
        required: true, 
      }
    }
  })

  const validateInput = ({target:{value, name}}) => {
    //Clear email error
    const newErrors = [];
    const {validations} = loginData[name];
    
    if(validations.required && !value){
      newErrors.push(`${name} is required`);
    }

    if(validations.pattern && !validations.pattern.test(value)){
      newErrors.push(`Invalid ${name} value`);
    }

    //set the new email input value
    //set the errors

    setLoginData({
      ...loginData,
      [name]: {
        ...loginData[name],
        value: value,
        errors: newErrors
      }
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // onLogin(email, password);
  };

  

  return (
    <form onSubmit={onSubmit}>
        {errorMsg && <div className="alert alert-danger">
            {errorMsg}
        </div>}
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="text"
          className="form-control"
          aria-describedby="emailHelp"
          defaultValue={loginData.email.value}
          onBlur={validateInput}
        />
        <ErrorMessages errors={loginData.email.errors} />      
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          className="form-control"
          defaultValue={loginData.password.value}
          onBlur={validateInput}
        />
        <ErrorMessages errors={loginData.password.errors} />      
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Login;