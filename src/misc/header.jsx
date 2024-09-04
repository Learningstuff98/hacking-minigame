import { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const Header = (props) => {
  const [showDropDownUserMenu, setShowDropDownUserMenu] = useState(false);

  const handleUserDisplayInfo = () => {
    if(!props.isLoading) {
      if(props.isAuthenticated) {
        return <div onClick={() => setShowDropDownUserMenu(!showDropDownUserMenu)}>
          <img className="profile-picture" src={props.user.picture}/>
        </div>
      } else {
        return <LoginButton/>
      }
    }
  }

  const dropDownMenu = () => {
    if(props.isAuthenticated && showDropDownUserMenu) {
      return <h3 className="green drop-down-menu-box">
        {props.user.name}
        <LogoutButton/>
      </h3>
    }
  }

  return <div>
    <h2 className="green header">
      <Link className="green" to={'/'}>Home page</Link>
      <div className="header-profile-link">
        {handleUserDisplayInfo()}
      </div>
    </h2>
    {dropDownMenu()}
  </div>  
}

export default Header;
