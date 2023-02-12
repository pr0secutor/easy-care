import {React,useState} from 'react'
import { Link } from 'react-router-dom';
import styles from './login.module.css'

const Login = () => {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [option,setOption] = useState("");
  
    const errors = {
      uname: "invalid username",
      pass: "invalid password"
    };
  
    function handleChange()
    {
      var select = document.getElementById("selectbox")
      setOption(select.options[select.selectedIndex].value)
      console.log(select.options[select.selectedIndex].value)
    }
  
    const renderErrorMessage = (name) =>
      name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
      );

    const renderForm = (
    <>
    <div className={styles.background}>
      <div className={styles.shape}></div>
      <div className={styles.shape}></div>
    </div>
    <form>
      <h3>I AM</h3>
      <select id='selectbox' className={styles.select_box} onChange={handleChange} placeholder='You are'>
        <option value="value1">You are</option>
        <option value="profile">PATIENT</option>
        <option value="doctor">DOCTOR</option>
        <option value="insurance">OTHER</option>
      </select>
      <Link id='login' to={`/${option}`}><button>Login</button></Link>
    </form>
    </>
    );

  
    return (
    <>
      {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
    </>
    );
}

export default Login