import * as React from 'react';

import { NavLink } from 'react-router-dom';

import '../App.css'


class Navigation extends React.Component {
    public defaultStyle = {
        textDecoration: 'none',
        color: 'black'
    };

    public render() {
        return (

            <div className='nav-container'>
                <NavLink style={this.defaultStyle} to='/' exact={true} strict={true} className='explore'><h2>Explorer</h2></NavLink>
                <NavLink style={this.defaultStyle} to='/eth' exact={true} strict={true} className='eth'><h2>ETH</h2></NavLink>
                <NavLink style={this.defaultStyle} to='/hashlock' exact={true} strict={true} className='hashlock'><h2>Hashlock</h2></NavLink>
                <NavLink style={this.defaultStyle} to='/tokens' exact={true} strict={true} className='tokens'><h2>Tokens</h2></NavLink>
                <NavLink style={this.defaultStyle} to='/objects' exact={true} strict={true} className='objects'><h2>Objects</h2></NavLink>
            </div>
        );
    }
}

export default Navigation;

