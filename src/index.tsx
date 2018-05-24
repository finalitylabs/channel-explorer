import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { default as l2 } from "./services/Layer2Service";

// import registerServiceWorker from './registerServiceWorker';

import Store from "./models/Store";

const privkey = '0x24ac65de524e0ac045ba6a4267d263fc2a8384dcd79dcd26163a295057f0fa87'

async function start():Promise<void> {
    const store = Store.Store.create({ balance: 0, transactions: [] });
    await l2.connect(privkey, 'Alice')
    
    // For testing connection only
    //const bal = await l2.getAgreementDetails() // l2.getBalance();
    //console.log('test balance reads', bal)
    // console.log('agreements', await l2.getAgreements());


    ReactDOM.render(<App Store={store}/>, document.getElementById("root") as HTMLElement);
    // registerServiceWorker();
    return;
}
start().then(()=>console.log('started'));
