import { Link } from 'react-router-dom';

function Root() {
  return <h2 className="green">
    Hello and welcome to my hacking minigame project thats inspired from the
    one in the Fallout games!
    <div><Link to={'about'}>About page</Link></div>
    <div><Link to={'sign-up'}>Sign Up</Link></div>
  </h2>  
}

export default Root
