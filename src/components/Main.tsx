import * as React from "react";

import Hashlock from "./Hashlock";
import Tokens from "./Tokens";
import Objects from "./Objects";

import Store from "../models/Store";
// import * as SRouter from 'mst-react-router';


// const { RouterModel, syncHistoryWithStore } = SRouter
import { observer } from "mobx-react";
import ExplorerMain from "../containers/ExplorerMain";
import ChannelMain from "../containers/ChannelMain";
import PendingAgreement from './PendingAgreement';
import AgreementDetail from './AgreementDetail';
import CreateAgreement from './CreateAgreement';
import ChannelDetail from './ChannelDetail';
import CreateChannel from './CreateChannel';
import Profile from "./Profile";



const children = { ExplorerMain, 
                   ChannelMain, 
                   Hashlock, 
                   Tokens,
                   Objects, 
                   PendingAgreement, 
                   AgreementDetail, 
                   CreateAgreement, 
                   ChannelDetail,
                   CreateChannel };

@observer
class Main extends React.Component<{ store: typeof Store.Store.Type }> {
  public render() {
    const key = this.props.store.page;

    // {() => this.props.store.setPage('','')}
    if (!children[key]) throw new Error("component does not exist as directed by state:" + key);

    const child: React.StatelessComponent<{ store: typeof Store.Store.Type }> = children[key];

    return (
      <div className="main-wrapper">
        <Profile store={this.props.store} />
        <div className='main-inner'>{React.createElement(child, { store: this.props.store })}</div>
      </div>
    );
  }
}

export default Main;
