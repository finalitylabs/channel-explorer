import * as React from 'react';

import { default as l2 } from "../services/Layer2Service";

class Explorer extends React.Component<any, any> {
    public stateName(obj:any):string {
        if(obj.closed === true) return "Closed";
        if(obj.inDispute) return "In Dispute";
        return "Open Pending";
    }
    public render() {
        if(!this.state || !this.state.agreements) return (<div className='explorer'/>);
        if(this.state.agreementIds.length === 0) return (<div className='explorer'>
            <h1>no agreements</h1>
        </div>);

        const ids:[string]= this.state.agreementIds as [string];
        const ms:any = this.state.agreements;
        console.log(ms[ids[0]]);

        console.log('agreements', this.state.agreementIds)
        const agreementList = ids.map((id, index) => (
            <tr>
                <td>Agreement {index+1}</td>
                <td>{ms[id].partyB}</td>
                <td>{ms[id].address}</td>
                <td>X days X hrs</td>
                <td>X {ms[id].types[0]}</td>
                <td>{this.stateName(ms[id])}</td>
                <td>(!)</td>
            </tr>)
        );

        return (
            <div className='explorer'>
                <h1>Explorer</h1>
                <div className='exp-title-new'>
                    <h2>Agreements</h2>
                    <div>+ New</div>
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
                        <tbody className='exp-tbody'>
                            {agreementList}
                        </tbody>

                    </table>
                </div>
            </div>
        );
    }
    public async componentDidMount() {
        const agreements = await l2.getAgreements();
        const agreementIds = Object.keys(agreements);
        this.setState({agreements, agreementIds});
    }
}

export default Explorer;
