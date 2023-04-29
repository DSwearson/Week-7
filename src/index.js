import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Edit from './components/Edit';
import SignUp from './components/SignUp';

const container = document.getElementById('root');
const root = createRoot(container);

//Implement at least one React route to handle navigation between pages
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/signup",
        element: <SignUp/>,
    },
    {
        path: "/cart",
        element: <Cart/>,
    },
    {
        path: "/edit/:id",
        element: <Edit/>,
    },
]);

//Implement at least one Redux provider to create a Redux store
root.render(
  <React.StrictMode>
    <ChakraProvider>
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
