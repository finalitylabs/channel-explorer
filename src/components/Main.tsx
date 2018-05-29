import * as React from "react";

import Hashlock from "./Hashlock";
import Tokens from "./Tokens";
import Objects from "./Objects";

import Store from "../models/Store";
// import * as SRouter from 'mst-react-router';

// const { RouterModel, syncHistoryWithStore } = SRouter
import { observer } from "mobx-react";
import Navigation from "./Navigation";
import ExplorerMain from "../containers/ExplorerMain";
import EthMain from "../containers/EthMain";

const children = { ExplorerMain, EthMain, Hashlock, Tokens, Objects };

@observer
class Main extends React.Component<{ store: typeof Store.Store.Type }> {
  public render() {
    const key = this.props.store.page;

    // {() => this.props.store.setPage('','')}
    //!children[key] ? throw new Error('component does not exist as directed by state:' + key)
    if (!children[key]) throw new Error("component does not exist as directed by state:" + key);

    const child: React.StatelessComponent<{ store: typeof Store.Store.Type }> = children[key];

    return (
      <div className="main-wrapper">
        <Navigation />
        <div>{React.createElement(child, { store: this.props.store })}</div>
      </div>
    );
  }
}

export default Main;
