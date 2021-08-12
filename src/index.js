import React from "react";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { hydrate } from "./app/transSlice";
import ReactDOM from "react-dom";

//localstorage stuff for reduxtoolkit

store.subscribe(() => {
  localStorage.setItem("list", JSON.stringify(store.getState().trans));
});

const getListFromLocalStorage = () => {
  try {
    const persistedState = localStorage.getItem("list");
    if (persistedState) return JSON.parse(persistedState);
  } catch (e) {
    console.log(e);
  }
};

const list = getListFromLocalStorage();
if (list) {
  store.dispatch(hydrate(list));
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
