import {React,useState} from 'react'
import './login.css'

const Login = () => {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    const errors = {
      uname: "invalid username",
      pass: "invalid password"
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(document.forms[0])
    };
  
    const renderErrorMessage = (name) =>
      name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
      );

    const renderForm = (
      <div className="form">
        <form onSubmit={handleSubmit}>
            <select className='select_box' onchange="changeValue(this)" placeholder='You are'>
                <option value="value1">You are</option>
                <option value="value1">PATIENT</option>
                <option value="value2">DOCTOR</option>
                <option value="value3">OTHER</option>
            </select>
            <div className="button-container">
                <input type="submit" value='submit'/>
            </div>
        </form>
      </div>
    );
  
    return (
      <div className="app">
        <div className="login-form">
          <div className="title">I AM</div>
          {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        </div>
      </div>
    );
}

export default Login