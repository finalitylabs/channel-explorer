import * as React from 'react';

import '../App.css';


class EthCreateChannel extends React.Component {
    public render() {
        return (
            <div className='eth-comp'>
                
                <div className='eth-send'>
                    <div className='eth-amount'>
                    <label>Your Balance:
                    </label>
                    <input type='text' placeholder='(XX)'/>

                
                    </div>
                    <div className='eth-amount'>
                    <label>Counter Party Balance:
                    </label>
                    <input type='text' placeholder='(XX)'/>

                    </div>
                    <div className='eth-send-button'>Send</div>
                </div>
            </div>
        );
    }
}

export default EthCreateChannel;
