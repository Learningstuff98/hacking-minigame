import { Link } from 'react-router-dom';

function Header(props) {

  // if the user isn't logged in, render a log in button

  // if the user is logged in, render the profile picture and the logout button

  // fix the profile picture render bug
  // return <img className="profile-picture" src={props.loggedInUser.picture}/>;

  function handleUserDisplayInfo() {
    if(props.loggedInUser) {
      return <div className="logged-in-user-name">
        {`Logged in as ${props.loggedInUser.name}`}
      </div>
    }
  }

  return <h3 className="green header header-background-color">
    <Link className="green" to={'/'}>Home page</Link>
    {handleUserDisplayInfo()}
  </h3>  
}

export default Header;
