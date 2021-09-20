import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ConnectedRouter } from "connected-react-router";
import { history } from "./data/configStore"
import { Provider } from "react-redux"
import store from "./data/configStore"

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();


