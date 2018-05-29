import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { default as l2 } from "./services/Layer2Service";

// import registerServiceWorker from './registerServiceWorker';

import Store from "./models/Store";

const privkey = '0x00ef97c6678ffcbb17d2d8a019abc374a830945008f9472ad05319d594208ffd'

async function start():Promise<void> {
    const store = Store.Store.create({ balance: 0, transactions: [] });
    await l2.connect(privkey, 'Alice')
    
    // For testing connection only
    //const bal = await l2.getAgreementDetails() // l2.getBalance();
    //console.log('test balance reads', bal)
    // console.log('agreements', await l2.getAgreements());


    ReactDOM.render(
        
        <App store={store}/>
        , document.getElementById("root") as HTMLElement);
    // registerServiceWorker();
    return;
}
start().then(()=>console.log('started'));
