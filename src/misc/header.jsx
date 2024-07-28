import './header.css';
import { Link } from 'react-router-dom';

function Header() {
  return <h2 className="header header-background-color">
    <Link className="green" to={'/'}>Home page</Link>
  </h2>  
}

export default Header;
