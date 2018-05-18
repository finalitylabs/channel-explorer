import * as React from 'react';
import {NavLink} from 'react-router-dom';


class Explorer extends React.Component {
    public render() {
        return (
            <div className='explorer'>
                <h1>Explorer</h1>
                <div className='exp-title-new'>
                    <h2>Agreements</h2>
                    <button>+ New</button>
                </div>
                <div className='exp-data-table'>
                    <table>
                        <thead>
                            <tr>
                                
                                <th>Agreement</th>
                                <th>Counter Party</th>
                                <th>TXHash</th>
                                <th>Age</th>
                                <th>State</th>
                                <th>Status</th>
                                <th>Channel Pending</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/*props.data.map(row => (
                                <tr>
                                <td></td>
                                </tr>))*/}
                            <tr>
                                <td><NavLink to='/agreement-detail' exact={true} strict={true}>Agreement 1</NavLink></td>
                                <td>0x...</td>
                                <td>0x...</td>
                                <td>X days X hrs</td>
                                <td>X ETH</td>
                                <td>Open Pending</td>
                                <td>(!)</td>
                            </tr>
                            <tr>
                            <a href="#"><td>Agreement 2</td></a>
                                <td>0x...</td>
                                <td>0x...</td>
                                <td>X days X hrs</td>
                                <td>X ETH</td>
                                <td>Active</td>
                                <td>{null}</td>
                            </tr>
                            <tr>
                            <a href="#"><td>Agreement 3</td></a>
                                <td>0x...</td>
                                <td>0x...</td>
                                <td>X days X hrs</td>
                                <td>X ETH</td>
                                <td>Disputed</td>
                                <td>{null}</td>
                            </tr>
                            <tr>
                            <a href="#"><td>Agreement 4</td></a>
                                <td>0x...</td>
                                <td>0x...</td>
                                <td>X days X hrs</td>
                                <td>X ETH</td>
                                <td>To Be Disputed</td>
                                <td>{null}</td>
                            </tr>
                            <tr>
                            <a href="#"><td>Agreement 5</td></a>
                                <td>0x...</td>
                                <td>0x...</td>
                                <td>X days X hrs</td>
                                <td>X ETH</td>
                                <td>Closed</td>
                                <td>{null}</td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        );
    }
}

export default Explorer;
