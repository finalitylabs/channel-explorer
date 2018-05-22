import * as React from "react";
import "./App.css";

import { BrowserRouter as Router } from 'react-router-dom';

import Wallet from "./models/Wallet";


import { observer } from "mobx-react";
import Profile from "./components/Profile";
import Main from './components/Main';
import Navigation from './components/Navigation';
// import SettleModal from "./components/SettleModal";

@observer
class App extends React.Component<{ wallet: typeof Wallet.Wallet.Type }> {

  public getBalance(e: React.SyntheticEvent<HTMLButtonElement>) {
    e.preventDefault();
    this.props.wallet.getBalance();
  }

  public render() {

    return (
      <Router>
      <div id='app-wrapper'>
        {/* <SettleModal /> */}
        <Profile wallet={this.props.wallet} />
        <div className='main-wrapper'>
          <Navigation />
          <Main wallet={this.props.wallet} />
        </div>
        
        {/* <div>Balance {this.props.wallet.balance}</div>
        <form>
          <button type="submit" onClick={this.getBalance.bind(this)}>
            Get Balance
          </button>
        </form>
        <br />
        <form>
          <input
            ref={r => {
              if (r) this.todoInput = r;
            }}
            type="text"
            placeholder="Add entry"
          />
          <button type="submit" onClick={this.addTodo.bind(this)}>
            Add todo
          </button>
        </form>

        <ul>
          {this.props.store.todos.map((item, i) => {
            return (
              <li key={i}>
                {item.text} &nbsp; &nbsp;
                <button onClick={e => this.removeTodo(e, item)}>Remove</button>
              </li>
            );
          })}
        </ul> */}
      </div>
      </Router>
    );
  }
}

/*
import logo from './logo.svg';
import Main from './components/Main';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
      
    );
  }
}
*/
export default App;
