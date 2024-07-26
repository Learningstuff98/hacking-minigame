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
      size="30"
      value={emailInput}
      onChange={e => setEmailInput(e.target.value)}
    />
  };

  const passwordInputElement = () => {
    return <input
      type="text"
      placeholder="Password"
      size="30"
      value={passwordInput}
      onChange={e => setPasswordInput(e.target.value)}
    />
  };

  const submitButton = () => {
    return <input
      type="submit"
      value="Submit"
    />
  };

  if(!props.loggedInUser) {
    return <h2>
      <form onSubmit={handleSubmit}>
        {emailInputElement()}
        <br/><br/>
        {passwordInputElement()}
        <br/><br/>
        {submitButton()}
        <br/><br/>
        <div><Link to={'/'}>Home page</Link></div>
      </form>
    </h2>
  } else {
    return <h2 className="green">
      A user is already logged in.
      <div><Link to={'/'}>Home page</Link></div>
    </h2>
  }
}

export default LogIn;
