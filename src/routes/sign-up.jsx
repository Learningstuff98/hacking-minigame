import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

function SignUp(props) {
  const navigate = useNavigate();
  const [usernameInput, setUsernameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [confirmPaswordInput, setConfirmPasswordInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(usernameInput.length > 0) {
      props.setUser({
        username: usernameInput,
        email: emailInput,
        password: passwordInput
      });
      navigate('/');
    } else {
      alert("Input can't be blank");
    }
  };

  const usernameInputElement = () => {
    return <input
      type="text"
      placeholder="Username"
      size="30"
      value={usernameInput}
      onChange={e => setUsernameInput(e.target.value)}
    />
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

  const confirmPasswordElement = () => {
    return <input
      type="text"
      placeholder="Confirm Password"
      size="30"
      value={confirmPaswordInput}
      onChange={e => setConfirmPasswordInput(e.target.value)}
    />
  };

  const submitButton = () => {
    return <input
      type="submit"
      value="Submit"
    />
  };

  return <h2>
    <form onSubmit={handleSubmit}>
      {usernameInputElement()}
      <br/><br/>
      {emailInputElement()}
      <br/><br/>
      {passwordInputElement()}
      <br/><br/>
      {confirmPasswordElement()}
      <br/><br/>
      {submitButton()}
      <br/><br/>
      <div><Link to={'/'}>Home page</Link></div>
    </form>
  </h2>
}

export default SignUp;
