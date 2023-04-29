import React from "react";
import {createRoot} from "react-dom/client";
import App from "../App";
import Home from "../components/Home";
import {act} from "react-dom/test-utils";
import {render, screen} from "@testing-library/react";

import { Provider } from 'react-redux';
import { store } from '../app/store';
import supertest from "supertest";
import server from "../../server";
const requestWithSuperTest = supertest(server);

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";


//front end
test("app loaded" , () =>{
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,
        }
       
    ]);

    const div = document.createElement("div");
    const root = createRoot(div);
    act(()=>{
        render(
            <Provider store={store}>
                 <RouterProvider router={router} />
            </Provider>)
    })

})

test("Books Loaded", ()=>{
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,
        }
       
    ]);

    const div = document.createElement("div");
    const root = createRoot(div);

    act(()=>{
        render(
            <Provider store={store}>
                 <RouterProvider router={router} />
            </Provider>)

    })

    expect(screen.getByText("Calculus")).toBeInTheDocument();

})

//backend

test("login" ,  async  ()=>{

    const res = await requestWithSuperTest.post('/api/login').send({ username:"admin1", password: "admin1"}).set('Accept', 'application/json');
    expect(res.status).toEqual(200);



    /*  res.json({
                message: "success",
                user: {
                    username: targetUser.username
                }
            }) */


})