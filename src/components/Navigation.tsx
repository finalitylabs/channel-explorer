import * as React from 'react';

import '../App.css'

class Navigation extends React.Component {

    public render() {
        
        return (

            <div className='nav-container'>
                <ul>
                    <li><h2>Explorer</h2></li>
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

