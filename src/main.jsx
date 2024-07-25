import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Root from './routes/root';
import ErrorPage from './routes/error-page';
import AboutPage from './routes/about';
import SignUp from './routes/sign-up';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: '/about',
    element: <AboutPage />
  },
  {
    path: "/sign-up",
    element: <SignUp />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
