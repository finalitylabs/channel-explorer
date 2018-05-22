import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

import Wallet from "./models/Wallet";

it("renders without crashing", () => {
  const div = document.createElement("div");

  const wallet = Wallet.Wallet.create({ balance: 0, transactions: [] });

  ReactDOM.render(<App wallet={wallet} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
