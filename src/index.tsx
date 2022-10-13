import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import { StoreProvider } from './store/Store';
import { Router, RouteComponentProps } from '@reach/router'
import HomePage from './pages/HomePage';
import FavouritesPage from './pages/FavouritesPage'

const RouterPage = (props: { pageComponent: JSX.Element } & RouteComponentProps) => props.pageComponent

ReactDOM.render(
  <StoreProvider>
    <Router>
      <App path='/'>
        <RouterPage pageComponent={<HomePage />} path='/episodes-ts-app' />
        <RouterPage pageComponent={<FavouritesPage />} path='/episodes-ts-app/favourites' />
      </App>
    </Router>
  </StoreProvider>,
  document.getElementById('root')
);
