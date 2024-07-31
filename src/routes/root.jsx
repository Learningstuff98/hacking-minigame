import { Link } from 'react-router-dom';

function Root(props) {
  if(props.loggedInUser) {
    return <div className="green box">
      <h2>
        <div className="log-out-button" onClick={() => props.setLoggedInUser(null)}>Log out</div>
        <div className="link-spacing"><Link className="green" to={'about'}>About page</Link></div>
      </h2>
    </div>
  } else {
    return <div className="green box">
      <h2>
        <div className="link-spacing"><Link className="green" to={'sign-up'}>Sign Up</Link></div>
        <div className="link-spacing"><Link className="green" to={'log-in'}>Log In</Link></div>
        <div className="link-spacing"><Link className="green" to={'about'}>About page</Link></div>
      </h2>
    </div>
  }
}

export default Root;
