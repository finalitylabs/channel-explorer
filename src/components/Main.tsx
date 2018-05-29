import * as React from "react";

import Hashlock from "./Hashlock";
import Tokens from "./Tokens";
import Objects from "./Objects";

import Store from "../models/Store";
// import * as SRouter from 'mst-react-router';


// const { RouterModel, syncHistoryWithStore } = SRouter
import { observer } from "mobx-react";
import ExplorerMain from "../containers/ExplorerMain";
import EthMain from "../containers/EthMain";
import PendingAgreement from './PendingAgreement';
import AgreementDetail from './AgreementDetail';
import CreateAgreement from './CreateAgreement';
import ChannelDetail from './ChannelDetail';



const children = { ExplorerMain, 
                   EthMain, 
                   Hashlock, 
                   Tokens,
                   Objects, 
                   PendingAgreement, 
                   AgreementDetail, 
                   CreateAgreement, 
                   ChannelDetail };

@observer
class Main extends React.Component<{ store: typeof Store.Store.Type }> {
  public render() {
    const key = this.props.store.page;

    // {() => this.props.store.setPage('','')}
    if (!children[key]) throw new Error("component does not exist as directed by state:" + key);

    const child: React.StatelessComponent<{ store: typeof Store.Store.Type }> = children[key];

    return (
      <div className="main-wrapper">
        <div className='nav-container'>
                <ul>
                    <li><h2 onClick={() => this.props.store.setPage('ExplorerMain', 'Explorer')}>Explorer</h2></li>
                    <li><h2 onClick={() => this.props.store.setPage('EthMain', '')}>ETH</h2></li>
                    <li><h2 onClick={() => this.props.store.setPage('Hashlock', '')}>Hashlock</h2></li>
                    <li><h2 onClick={() => this.props.store.setPage('Tokens', '')}>Tokens</h2></li>
                    <li><h2 onClick={() => this.props.store.setPage('Objects', '')}>Objects</h2></li>
                </ul>
            </div>
        <div>{React.createElement(child, { store: this.props.store })}</div>
      </div>
    );
  }
}

export default Main;
