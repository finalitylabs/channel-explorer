import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

// import registerServiceWorker from './registerServiceWorker';

import Wallet from "./models/Wallet";

const wallet = Wallet.Wallet.create({ balance: 0, transactions: [] });
wallet.connect();
//this.props.wallet.getAgreement("").then(x=>console.log(x)); // TODO testing
//wallet.getBalance();

ReactDOM.render(<App wallet={wallet}/>, document.getElementById("root") as HTMLElement);
// registerServiceWorker();
