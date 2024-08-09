import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { useAuth0 } from "@auth0/auth0-react";
import './App.css'
import Root from './routes/root';
import ErrorPage from './routes/error-page';
import AboutPage from './routes/about';
import Header from './misc/header';

function Main() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    if(user) {
      setLoggedInUser(user);
    }
    if(loggedInUser) {
      console.log(`The user is ${JSON.stringify(loggedInUser)}`);
    }
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>
        <Header
          loggedInUser={loggedInUser}
        />
        <Root/>
      </div>,
      errorElement: <ErrorPage/>
    },
    {
      path: '/about',
      element: <div>
        <Header
          loggedInUser={loggedInUser}
        />
        <AboutPage/>
      </div>,
      errorElement: <ErrorPage/>
    }
  ]);

  return <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
}

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
