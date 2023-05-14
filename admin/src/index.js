import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { store } from './redux/redux'
import { Provider } from 'react-redux'
ReactDOM.render(
  <Provider store={store}>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
  </Provider >,
  document.getElementById("root")
);
