import * as React from 'react';

import '../App.css';

class Eth extends React.Component {
    public render() {
        return (
            <div className='eth-comp'>
                <select>
                    <option selected={true} disabled={true}>Agreement</option>
                    <option>1</option>
                    <option>2</option>
                </select>
                <div className='eth-select-button'>
                <select>
                    <option selected={true} disabled={true}>Channel</option>
                    <option>1</option>
                    <option>2</option>
                </select>
                
                    <button>+</button>
                </div>
                <div className='eth-send'>
                    <div className='eth-send-state'>
                        <h3>State</h3>
                        <p>XX ETH</p>
                    </div>
                    <label>Amount:
                        <input type='text' />
                    </label>
                    <button>Send</button>
                </div>
            </div>
        );
    }
}

export default Eth;
