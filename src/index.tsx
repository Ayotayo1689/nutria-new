import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "contexts/user-provider";
import { SnackbarProvider } from "notistack";
import ProfileProvider from "contexts/profile-provider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: "top", 
        horizontal: "center",
      }}
    >
      <BrowserRouter>
        <UserProvider>
          <ProfileProvider>
            <App />
          </ProfileProvider>
        </UserProvider>
      </BrowserRouter>
    </SnackbarProvider>
  </React.StrictMode>
);
