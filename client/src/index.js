import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter } from "react-router-dom";
import { SearchContextProvider } from "./context/SearchContext";
import { RoomContextProvider } from "./context/RoomContext";
import { PaymentContextProvider } from "./context/PaymentContext";
import { AuthContextProvider } from "./context/AuthContext";
import { ModalContextProvider } from "./context/ModalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <SearchContextProvider>
      <RoomContextProvider>
        <PaymentContextProvider>
          <AuthContextProvider>
            <ModalContextProvider>
              <GoogleOAuthProvider clientId="241463530680-jjfl1070uio6ovs460i489lkfv3j8gtu.apps.googleusercontent.com">
                <App />
              </GoogleOAuthProvider>
            </ModalContextProvider>
          </AuthContextProvider>
        </PaymentContextProvider>
      </RoomContextProvider>
    </SearchContextProvider>
  </BrowserRouter>
);
