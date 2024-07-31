import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

function LogIn(props) {
  const navigate = useNavigate();
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(passwordInput === props.user.password) {
      props.setLoggedInUser(props.user);
      navigate('/');
    } else {
      alert("incorrect password");
    }
  };

  const emailInputElement = () => {
    return <input
      type="text"
      placeholder="Email"
      className="form-input-style"
      value={emailInput}
      onChange={e => setEmailInput(e.target.value)}
    />
  };

  const passwordInputElement = () => {
    return <input
      type="text"
      placeholder="Password"
      className="form-input-style"
      value={passwordInput}
      onChange={e => setPasswordInput(e.target.value)}
    />
  };

  const submitButton = () => {
    return <input
      type="submit"
      value="Log in"
      className="form-button"
    />
  };

  if(!props.loggedInUser) {
    return <h3 className="box">
      <form onSubmit={handleSubmit}>
        <div className="green">email</div>
        <div className="form-element-spacing">{emailInputElement()}</div>
        <div className="green">password</div>
        <div className="form-element-spacing">{passwordInputElement()}</div>
        <div className="form-element-spacing">{submitButton()}</div>
        <div className="form-element-spacing"><Link className="green" to={'/sign-up'}>Sign Up</Link></div>
        <div><Link className="green" to={'/'}>Home page</Link></div>
      </form>
    </h3>
  } else {
    return <h2 className="green">
      A user is already logged in.
      <div><Link to={'/'}>Home page</Link></div>
    </h2>
  }
}

export default LogIn;
