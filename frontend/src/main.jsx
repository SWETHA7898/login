import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Success from "./succes";
import Fail from "./fail";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";



const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(
  
  
  <BrowserRouter>
  <Routes>
    <Route path='/'element={<App></App>}></Route>
    <Route path='/login' element={<Success></Success>}></Route>
    <Route path='/failed' element={<Fail></Fail>}></Route>
  </Routes>
  </BrowserRouter>
)
