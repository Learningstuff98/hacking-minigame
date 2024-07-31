import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Root from './routes/root';
import ErrorPage from './routes/error-page';
import AboutPage from './routes/about';
import SignUp from './routes/sign-up';
import LogIn from './routes/log-in';
import Header from './misc/header';

function Main() {
  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>
        <Header/>
        <Root
          loggedInUser={loggedInUser}
          setLoggedInUser={setLoggedInUser}
        />
      </div>,
      errorElement: <ErrorPage/>
    },
    {
      path: '/about',
      element: <div>
        <Header/>
        <AboutPage/>
      </div>,
      errorElement: <ErrorPage/>
    },
    {
      path: "/sign-up",
      element: <div>
        <Header/>
        <SignUp
          setUser={setUser}
          setLoggedInUser={setLoggedInUser}
          loggedInUser={loggedInUser}
        />
      </div>,
      errorElement: <ErrorPage/>
    },
    {
      path: "/log-in",
      element: <div>
        <Header/>
        <LogIn
          user={user}
          loggedInUser={loggedInUser}
          setLoggedInUser={setLoggedInUser}
        />
      </div>,
      errorElement: <ErrorPage/>
    }
  ]);

  return <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Main/>
);
