import { Link } from 'react-router-dom';
import LoginButton from '../misc/LoginButton';
import LogoutButton from '../misc/LogoutButton';

function Root(props) {

  function handleUserFlowButton() {
    if(props.loggedInUser) {
      return <LogoutButton/>;
    } else {
      return <LoginButton/>;
    }
  }

  return <div className="green box">
    {handleUserFlowButton()}
    <h2 className="link-spacing"><Link className="green" to={'about'}>About page</Link></h2>
  </div>
}

export default Root;
