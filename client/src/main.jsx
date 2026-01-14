import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { store } from "./redux/store";
import { Provider } from 'react-redux'
import { Toaster } from "react-hot-toast";
import AuthProvider from "./components/auth/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <AuthProvider>
        <App />
      </AuthProvider>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 10000,
        }}
      />
    </Provider>
  </BrowserRouter >
);
