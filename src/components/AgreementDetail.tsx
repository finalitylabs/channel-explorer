import * as React from 'react';

import '../App.css';

import { default as l2 } from "../services/Layer2Service";

function stateName(obj:any):string {
    if(obj.closed === true) return "Closed";
    if(obj.inDispute) return "In Dispute";
    if(obj.__active) return "active";
    return "Open Pending";
}

class AgreementDetail extends React.Component<any, any> {
    public render() {
        if(!this.state || !this.state.agreement) return (<div className='explorer'/>);
        console.log('agreement', this.state.agreement)

        const a:any = this.state.agreement;
        const cstate:string = stateName(a);

        // const channels = a.channels;

        return (
            <div className='explorer'>
                <h1><span
                        style={{cursor: 'pointer'}}
                        onClick={() => this.props.store.setPage('ExplorerMain', 'Explorer')}>Explorer</span> / Agreement 1</h1>
                <div className='exp-title-new red'>
                    <h2>Agreement 1 Information</h2>
                    <button onClick={()=>this.props.store.setPage('EthMain', 'EthCreateChannel')}>+ Channel</button>
                    <button>Settle</button>
                </div>
                <div>
                <form className='agreement-detail-form'>
                    <label>TXHash
                        <p>{a.address}</p>
                    </label>
                    <label>
                        Status
                        <p>{cstate}</p>
                    </label>
                    <label>
                        Age
                        <p>X d X hrs</p>
                    </label>
                    <label>Counter Party
                        <p>{a.partyB}</p>
                    </label>
                    <label>State
                        <p>({ l2.web3().fromWei(a.balanceB, 'ether') }) {a.types[0]}</p>
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
                                <td 
                                    style={{cursor: 'pointer'}}
                                    onClick={() => this.props.store.setPage('ExplorerMain', 'ChannelDetail')}>Channel 1</td>
                                <td>0x...</td>
                                <td>0x...</td>
                                <td>X days X hrs</td>
                                <td>X ETH</td>
                                <td>Open Pending</td>
                                
                            </tr>
                            <tr>
                                <td>Channel 1</td>
                                <td>0x...</td>
                                <td>0x...</td>
                                <td>X days X hrs</td>
                                <td>X ETH</td>
                                <td>Active</td>
                                
                            </tr>
                            <tr>
                                <td>Channel 1</td>
                                <td>0x...</td>
                                <td>0x...</td>
                                <td>X days X hrs</td>
                                <td>X ETH</td>
                                <td>Disputed</td>
                                
                            </tr>
                            <tr>
                                <td>Channel 1</td>
                                <td>0x...</td>
                                <td>0x...</td>
                                <td>X days X hrs</td>
                                <td>X ETH</td>
                                <td>To Be Disputed</td>
                                
                            </tr>
                            <tr>
                                <td>Channel 1</td>
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
        const agreements = await l2.getAgreements();
        const agreementId = Object.keys(agreements)[0];
        this.setState({agreement: agreements[agreementId]});
    }
}

export default AgreementDetail;
