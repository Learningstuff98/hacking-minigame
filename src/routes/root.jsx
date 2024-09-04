import { Link } from 'react-router-dom';

const Root = (props) => {

  const handleGamePageLink = () => {
    if(props.isAuthenticated) {
      return<h1>
        <Link className="green" to={'game'}>Play</Link>
      </h1>
    }
  };

  return <div className="box">
    <h1><Link className="green" to={'about'}>About page</Link></h1>
    {handleGamePageLink()}
  </div>
}

export default Root;
