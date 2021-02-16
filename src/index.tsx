import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StoreProvider } from './Store';
import {Router, RouteComponentProps} from '@reach/router'
import HomePage from './HomePage';
import FavouritesPage from './FavouritesPage'

const RouterPage = (props: {pageComponent: JSX.Element} & RouteComponentProps) => props.pageComponent

ReactDOM.render(
  <StoreProvider>
    <Router>
    <App path='/'>
    <RouterPage pageComponent={<HomePage />} path='/' />
    <RouterPage pageComponent={<FavouritesPage />} path='/favourites' />
    </App>
    </Router>
  </StoreProvider>,
  document.getElementById('root')
);
