import { Link } from 'react-router-dom';

function Root() {
  return <div className="box">
    <h2><Link className="green" to={'about'}>About page</Link></h2>
  </div>
}

export default Root;
