import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Root from './routes/root';
import ErrorPage from './routes/error-page';
import AboutPage from './routes/about';
import SignUp from './routes/sign-up';

function Main() {
  const [user, setUser] = useState(null);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root user={user} setUser={setUser}/>,
      errorElement: <ErrorPage/>
    },
    {
      path: '/about',
      element: <AboutPage/>
    },
    {
      path: "/sign-up",
      element: <SignUp setUser={setUser}/>
    }
  ]);

  return <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Main/>
);
