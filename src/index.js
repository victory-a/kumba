import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "styles";
import App from "./App";
import UserProvider from "contexts/UserContext";


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
