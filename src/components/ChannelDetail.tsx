import * as React from 'react';
import { default as l2, Channel } from "../services/Layer2Service";
import Store from "../models/Store";

// import { NavLink } from 'react-router-dom';

import '../App.css';
interface Props {
    channel:Channel | null,
    transactions:any[]
}

class ChannelDetail extends React.Component<{ store: typeof Store.Store.Type }, Props>{
    constructor(props:any) {
        super(props)
        this.state = {channel:null, transactions:[] };
    }
    public render() {
        const channelID = this.props.store.page_stateB;
        const agreementID = this.props.store.page_stateA;
        const channel = this.state.channel;
        if(!channel) return (<div className='explorer'/>);
        console.log('channel detail state', this.state);
        return (
            <div className='explorer'>
                <h1>
                    <span style={{cursor: 'pointer'}}
                          onClick={() => this.props.store.setPage('ExplorerMain', 'Explorer')}>Explorer 
                    </span>/ 
                    <span style={{cursor: 'pointer'}}
                          onClick={() => this.props.store.setPage('ExplorerMain', 'AgreementDetail')}> Agreement {agreementID} 
                    </span>/ Channel {channelID}</h1>
                <div className='exp-title-new'>
                    <h2>Channel 1 Information</h2>
                    <button className='blue'>+ Transaction</button>
                    <button className='red'>Settle</button>
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
                                <td>Transaction 1</td>
                                <td>0x...</td>
                                <td>0x...</td>
                                <td>X days X hrs</td>
                                <td>X ETH</td>
                                <td>Open Pending</td>
                                
                            </tr>
                            <tr>
                            <td>Transaction 2</td>
                                <td>0x...</td>
                                <td>0x...</td>
                                <td>X days X hrs</td>
                                <td>X ETH</td>
                                <td>Active</td>
                                
                            </tr>
                            <tr>
                            <td>Transaction 3</td>
                                <td>0x...</td>
                                <td>0x...</td>
                                <td>X days X hrs</td>
                                <td>X ETH</td>
                                <td>Disputed</td>
                                
                            </tr>
                            <tr>
                            <td>Transaction 4</td>
                                <td>0x...</td>
                                <td>0x...</td>
                                <td>X days X hrs</td>
                                <td>X ETH</td>
                                <td>To Be Disputed</td>
                                
                            </tr>
                            <tr>
                            <td>Transaction 5</td>
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
    public async componentDidMount() {
        //const agreements = await l2.getAllChannels(;
        const channelId = this.props.store.page_stateB; //Object.keys(agreements)[0];
        console.log('channelId', channelId);//, agreements[agreementId])


        const channel:Channel = await l2.getChannel(channelId);
        const transactions:any[] = (await l2.getTransactions(channelId)) || [];
        this.setState({channel, transactions});
    }
}

export default ChannelDetail;
