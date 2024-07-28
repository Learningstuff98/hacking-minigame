import { Link } from 'react-router-dom';

function AboutPage() {
  return <h2 className="green">
    Hello and welcome to my hacking minigame project thats inspired from the
    one in the Fallout games!
    <div><Link to={'/'}>Home page</Link></div>
  </h2>  
}

export default AboutPage
