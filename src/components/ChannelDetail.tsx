import * as React from 'react';

import { NavLink } from 'react-router-dom';

import '../App.css';

class ChannelDetail extends React.Component {
    public render() {
        return (
            <div className='explorer'>
                <h1>Explorer / Agreement 1 / Channel 1</h1>
                <div className='exp-title-new red'>
                    <h2>Channel 1 Information</h2>
                    <button>Settle</button>
                </div>
                <div>
                <form className='agreement-detail-form'>
                    <label>TXHash
                        <p>0x...</p>
                    </label>
                    <label>
                        Status
                        <p>Active</p>
                    </label>
                    <label>
                        Age
                        <p>X d X hrs</p>
                    </label>
                    <label>Counter Party
                        <p>0x...</p>
                    </label>
                    <label>State
                        <p>(XX) ETH</p>
                    </label>
                    <label>
                        Nonce & Position
                        <p>0 | XX</p>
                    </label>
                </form>
                </div>
                <div className='exp-data-table'>
                    <table>
                        <thead>
                            <tr>
                                
                                <th>Channels</th>
                                <th>Counter Party</th>
                                <th>TXHash</th>
                                <th>Age</th>
                                <th>State</th>
                                <th>Status</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {/*props.data.map(row => (
                                <tr>
                                <td></td>
                                </tr>))*/}
                            <tr>
                                <td><a href="#">Channel 1</a></td>
                                <td>0x...</td>
                                <td>0x...</td>
                                <td>X days X hrs</td>
                                <td>X ETH</td>
                                <td>Open Pending</td>
                                
                            </tr>
                            <tr>
                            <td><a href="#">Channel 2</a></td>
                                <td>0x...</td>
                                <td>0x...</td>
                                <td>X days X hrs</td>
                                <td>X ETH</td>
                                <td>Active</td>
                                
                            </tr>
                            <tr>
                            <td><a href="#">Channel 3</a></td>
                                <td>0x...</td>
                                <td>0x...</td>
                                <td>X days X hrs</td>
                                <td>X ETH</td>
                                <td>Disputed</td>
                                
                            </tr>
                            <tr>
                            <td><a href="#">Channel 4</a></td>
                                <td>0x...</td>
                                <td>0x...</td>
                                <td>X days X hrs</td>
                                <td>X ETH</td>
                                <td>To Be Disputed</td>
                                
                            </tr>
                            <tr>
                            <td><a href="#">Channel 5</a></td>
                                <td>0x...</td>
                                <td>0x...</td>
                                <td>X days X hrs</td>
                                <td>X ETH</td>
                                <td>Closed</td>
                                
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        );
    }
}

export default ChannelDetail;
