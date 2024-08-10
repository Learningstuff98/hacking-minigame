import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import Main from './main';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-fm0qde2b5sqd52na.us.auth0.com"
    clientId="C5DZ3F0HgJp9KRoUFKmoVa1TYKLmg4rR"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
    <Main/>
  </Auth0Provider>
);
