import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import './App.css'
import Root from './routes/root';
import ErrorPage from './routes/error-page';
import AboutPage from './routes/about';
import Header from './misc/header';
import Game from './routes/game';

const Main = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>
        <Header
          user={user}
          isLoading={isLoading}
          isAuthenticated={isAuthenticated}
        />
        <Root
          isAuthenticated={isAuthenticated}
        />
      </div>,
      errorElement: <ErrorPage/>
    },
    {
      path: '/about',
      element: <div>
        <Header
          user={user}
          isLoading={isLoading}
          isAuthenticated={isAuthenticated}
        />
        <AboutPage/>
      </div>,
      errorElement: <ErrorPage/>
    },
    {
      path: '/game',
      element: <div>
        <Header
          user={user}
          isLoading={isLoading}
          isAuthenticated={isAuthenticated}
        />
        <Game
          isLoading={isLoading}
          isAuthenticated={isAuthenticated}
        />
      </div>
    }
  ]);

  return <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
}

export default Main;
