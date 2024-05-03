import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';
import './index.css';

const BrowserRouter = createBrowserRouter({
  routes,
});

ReactDOM.render(
  <RouterProvider BrowserRouter={BrowserRouter}>
    <BrowserRouter />
  </RouterProvider>,
  document.getElementById('root')
);
