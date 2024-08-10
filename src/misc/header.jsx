import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const Header = (props) => {
  const [showDropDownUserMenu, setShowDropDownUserMenu] = useState(false);

  const handleUserDisplayInfo = () => {
    if(props.loggedInUser) {
      return <div onClick={() => setShowDropDownUserMenu(!showDropDownUserMenu)}>
        <img className="profile-picture" src={props.loggedInUser.picture}/>
      </div>
    } else {
      return <LoginButton/>
    }
  }

  const dropDownMenu = () => {
    if(showDropDownUserMenu) {
      return <div className="green drop-down-menu-box">
        {props.loggedInUser.name}
        <LogoutButton/>
      </div>
    }
  }

  return <div>
    <h3 className="green header">
      <Link className="green" to={'/'}>Home page</Link>
      <div className="header-profile-link">
        {handleUserDisplayInfo()}
      </div>
    </h3>
    {dropDownMenu()}
  </div>  
}

export default Header;
