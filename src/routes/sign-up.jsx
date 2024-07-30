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
      const user = {
        username: usernameInput,
        email: emailInput,
        password: passwordInput
      };
      props.setUser(user);
      props.setLoggedInUser(user);
      navigate('/');
    } else {
      alert("Input can't be blank");
    }
  };

  const usernameInputElement = () => {
    return <input
      type="text"
      placeholder="Username"
      className="form-input-style"
      value={usernameInput}
      onChange={e => setUsernameInput(e.target.value)}
    />
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

  const confirmPasswordElement = () => {
    return <input
      type="text"
      placeholder="Confirm Password"
      className="form-input-style"
      value={confirmPaswordInput}
      onChange={e => setConfirmPasswordInput(e.target.value)}
    />
  };

  const submitButton = () => {
    return <input
      type="submit"
      value="Submit"
      className="form-button"
    />
  };

  if(!props.loggedInUser) {
    return <h3 className="box">
      <form onSubmit={handleSubmit}>
        <div className="green">username</div>
        <div className="form-element-spacing">{usernameInputElement()}</div>
        <div className="green">email</div>
        <div className="form-element-spacing">{emailInputElement()}</div>
        <div className="green">password</div>
        <div className="form-element-spacing">{passwordInputElement()}</div>
        <div className="green">confirm password</div>
        <div className="form-element-spacing">{confirmPasswordElement()}</div>
        <div className="form-element-spacing">{submitButton()}</div>
        <div className="form-element-spacing"><Link className="green" to={'/log-in'}>Log In</Link></div>
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

export default SignUp;
