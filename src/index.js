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
import Cart from './pages/Cart';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

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
      },
      {
        path: '/produtos/:id',
        element: <Product />,
        loader: async({ params }) => {
          return productLoader(params.id);
        }
      },
      {
        path: '/category',
        element: <Category />
      },
      {
        path: '/cart',
        element: <Cart/>
      },
      {
        path:'/sign-up',
        element: <SignUp />
      },
      {
        path:'/sign-in',
        element: <SignIn />
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
