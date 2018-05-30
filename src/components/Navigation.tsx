import * as React from 'react';

import '../App.css'

import { observer } from 'mobx-react';
import Store from '../models/Store';

@observer
class Navigation extends React.Component<{store: typeof Store.Store.Type}> {

    public render() {
        
        return (

            <div className='nav-container'>
                <ul>
                    <li><h2 onClick={() => this.props.store.setPage('Explorer', "")}>Explorer</h2></li>
                    <li><h2>ETH</h2></li>
                    <li><h2>Hashlock</h2></li>
                    <li><h2>Tokens</h2></li>
                    <li><h2>Objects</h2></li>
                </ul>
            </div>
        );
    }
}

export default Navigation;

