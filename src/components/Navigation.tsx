import * as React from 'react';
import '../App.css'

class Navigation extends React.Component {
    public render() {
        return (
            <div className='nav-container'>
                <div className='explore'><h2>Explore</h2></div>
                <div className='eth'><h2>ETH</h2></div>
                <div className='hashlock'><h2>Hashlock</h2></div>
                <div className='tokens'><h2>Tokens</h2></div>
                <div className='objects'><h2>Objects</h2></div>
            </div>
        );
    }
}

export default Navigation;
