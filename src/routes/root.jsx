import { Link } from 'react-router-dom';

function Root(props) {
  if(props.loggedInUser) {
    return <div className="green">
      <h2>
        <div onClick={() => props.setLoggedInUser(null)}>Log out</div>
        <div><Link to={'about'}>About page</Link></div>
      </h2>
    </div>
  } else {
    return <div className="green">
      <h2>
        <div><Link to={'sign-up'}>Sign Up</Link></div>
        <div><Link to={'log-in'}>Log In</Link></div>
        <div><Link to={'about'}>About page</Link></div>
      </h2>
    </div>
  }
}

export default Root;
