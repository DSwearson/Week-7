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
//unit testing is singular
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
//testing our login
test("login" ,  async  ()=>{

    const res = await requestWithSuperTest.post('/api/login').send({ username:"admin1", password: "admin1"}).set('Accept', 'application/json');
    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty('message');
    expect(res.body.message).toBe("success");

})

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

//testing our signup
test("signup" ,  async  ()=>{

    const username = makeid(5);
 

    const res = await requestWithSuperTest.post('/api/signup').send({ username: username, password: "adsfsd123"}).set('Accept', 'application/json');
    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty('message');
    expect(res.body.message).toBe("success");

})

//integration tests is group testing from start to finish
describe("login and add to cart", ()=>{

    test("login" ,  async  ()=>{

        const res = await requestWithSuperTest.post('/api/login').send({ username:"admin1", password: "admin1"}).set('Accept', 'application/json');
        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toBe("success");
    
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
    




});
