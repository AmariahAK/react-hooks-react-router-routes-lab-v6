import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Directors from './pages/Directors';
import Actors from './pages/Actors';
import Movie from './pages/Movie';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/directors',
    component: Directors,
    exact: true
  },
  {
    path: '/actors',
    component: Actors,
    exact: true
  },
  {
    path: '/movie/:id',
    component: Movie,
    exact: true
  }
];

const Routes = () => (
  <Switch>
    {routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        component={route.component}
      />
    ))}
  </Switch>
);

export default Routes;
