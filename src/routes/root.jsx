import { Link } from 'react-router-dom';

const Root = (props) => {

  const handleGamePageLink = () => {
    if(props.isAuthenticated) {
      return<h2>
        <Link className="green" to={'game'}>Play</Link>
      </h2>
    }
  };

  return <div className="box">
    <h2><Link className="green" to={'about'}>About page</Link></h2>
    {handleGamePageLink()}
  </div>
}

export default Root;
