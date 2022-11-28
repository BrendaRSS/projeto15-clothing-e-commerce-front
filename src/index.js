import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import ContextProvider from "./context/DadosContext";
import { GlobalStyle } from './globalStyle';
import Root from './pages/Root';
import { rootLoader } from './helpers/rootLoader';
import Home from './pages/Home';
import Product from './pages/Product';
import { productLoader } from './helpers/productLoader';
import Category from './pages/Category';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: async () => {
      return rootLoader();
    },
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
