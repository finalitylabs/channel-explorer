import * as React from 'react';

import '../App.css';

class Explorer extends React.Component {
    public render() {
        return (
            <div className='explorer-container'>
                <div className='header'>
                    <h1>Explorer</h1>
                </div>
                <div className='agreements'>
                    <h2>Agreements</h2>
                    <button>+ New</button>
                </div>
                <div className='exp-data-table'>
                    <table>
                        <thead>
                            <tr>
                                
                                <th>Agreement</th>
                                <th>TXHash</th>
                                <th>Age</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Value</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/*props.data.map(row => (
                                <tr>
                                <td></td>
                                </tr>))*/}
                            <tr>
                                <td>Agreement 1</td>
                                <td>0x.....</td>
                                <td>X d X hrs</td>
                                <td>0x...</td>
                                <td>0x...</td>
                                <td>XX ETH</td>
                                <td>Active</td>
                            </tr>
                            <tr>
                                <td>Agreement 2</td>
                                <td>0x.....</td>
                                <td>X d X hrs</td>
                                <td>0x...</td>
                                <td>0x...</td>
                                <td>XX ETH</td>
                                <td>Pending</td>
                            </tr>
                            <tr>
                                <td>Agreement 3</td>
                                <td>0x.....</td>
                                <td>X d X hrs</td>
                                <td>0x...</td>
                                <td>0x...</td>
                                <td>XX ETH</td>
                                <td>Closed</td>
                            </tr>
                        </tbody>

                    </table>
                </div>
                <div className='exp-pages'>
                    <div>&lt;&lt;</div>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>&gt;&gt;</div>

                </div>
            </div>
        );
    }
}

export default Explorer;
