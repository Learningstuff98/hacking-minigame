import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

function SignUp(props) {
  const navigate = useNavigate();
  const [usernameInput, setUsernameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [confirmPaswordInput, setConfirmPasswordInput] = useState('');
  const [validationErrors, setValidationErrors] = useState([]);

  function blankInputs() {
    return usernameInput === '' ||
    emailInput === '' ||
    passwordInput === '' ||
    confirmPaswordInput === '';
  };

  function passwordInputsMatch() {
    return passwordInput === confirmPaswordInput;
  };

  function passwordIsValidLength() {
    return passwordInput.length >= 8 && passwordInput.length <= 20;
  };

  function formIsValid() {
    return !blankInputs() &&
    passwordInputsMatch() &&
    passwordIsValidLength();
  };

  function makeUser() {
    const user = {
      username: usernameInput,
      email: emailInput,
      password: passwordInput
    };
    props.setUser(user);
    props.setLoggedInUser(user);
  };

  function createValidationErrors() {
    let newValidationErrors = [];
    if(blankInputs()) {
      newValidationErrors.push("Inputs can't be blank");
    }
    if(!passwordInputsMatch()) {
      newValidationErrors.push("Password and confirm password fields must match");
    }
    if(!passwordIsValidLength()) {
      newValidationErrors.push("Password must be between 8 and 20 characters");
    }
    setValidationErrors(newValidationErrors);
  };

  const submit = (e) => {
    e.preventDefault();
    if(formIsValid()) {
      makeUser();
      navigate('/');
    } else {
      createValidationErrors();
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
      value="Sign up"
      className="form-button"
    />
  };

  function renderValidationErrors() {
    return <div>
      {validationErrors.map((validationError, index) => {
        return <div className="red form-element-spacing" key={index}>
          {validationError}
        </div>
      })}
    </div>
  };

  if(!props.loggedInUser) {
    return <h3 className="box">
      {renderValidationErrors()}
      <form onSubmit={submit}>
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
};

export default SignUp;
