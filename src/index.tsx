import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

// import registerServiceWorker from './registerServiceWorker';

import Store from "./models/Store";

const store = Store.Store.create({ balance: 0, transactions: [] });
store.connect();
//this.props.Store.getAgreement("").then(x=>console.log(x)); // TODO testing
//Store.getBalance();

ReactDOM.render(<App Store={store}/>, document.getElementById("root") as HTMLElement);
// registerServiceWorker();
