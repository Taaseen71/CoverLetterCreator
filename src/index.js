import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import EditResume from './components/EditResume';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/edit-resume",
    element: <EditResume/>
  }
]);



ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
