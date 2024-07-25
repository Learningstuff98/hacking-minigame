import { Link } from 'react-router-dom';

function Root(props) {
  if(props.user) {
    return <div className="green">
      <h2>
        Hello {props.user.username} and welcome to my hacking minigame project thats inspired from the
        one in the Fallout games!
        <div><Link to={'about'}>About page</Link></div>
        <div onClick={() => props.setUser(null)}>Log out</div>
      </h2>
    </div>
  } else {
    return <div className="green">
      <h2>
        Hello and welcome to my hacking minigame project thats inspired from the
        one in the Fallout games!
        <div><Link to={'sign-up'}>Sign Up</Link></div>
        <div><Link to={'about'}>About page</Link></div>
      </h2>
    </div>
  }
}

export default Root;
