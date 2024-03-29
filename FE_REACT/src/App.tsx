import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "router";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "./reduxstore/store";

function App() {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <ToastContainer/>
    </Provider>
    </>
  );
}

export default App;