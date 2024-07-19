import { Link } from 'react-router-dom';

function AboutPage() {
  return <h2 className="green">
    This is the about page. Horay
    <div><Link to={'/'}>Home page</Link></div>
  </h2>  
}

export default AboutPage
