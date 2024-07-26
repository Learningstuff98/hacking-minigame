import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Root from './routes/root';
import ErrorPage from './routes/error-page';
import AboutPage from './routes/about';
import SignUp from './routes/sign-up';
import LogIn from './routes/log-in';

function Main() {
  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root
        loggedInUser={loggedInUser}
        setLoggedInUser={setLoggedInUser}
      />,
      errorElement: <ErrorPage/>
    },
    {
      path: '/about',
      element: <AboutPage/>
    },
    {
      path: "/sign-up",
      element: <SignUp
        setUser={setUser}
        setLoggedInUser={setLoggedInUser}
      />
    },
    {
      path: "/log-in",
      element: <LogIn
        user={user}
        setLoggedInUser={setLoggedInUser}
      />,
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
