import * as React from 'react';

import '../App.css';


class EthCreateChannel extends React.Component<any, any> {
    

    public render() {
        
        return (
            <div className='eth-comp'>
                
                <div className='eth-send'>
                    <h1>Create ETH Channel</h1>
                    <div className='eth-amount'>
                    <label>Your Balance:
                    </label>
                    <input type='text' placeholder='(XX)' onChange={this.onChange}/>

                
                    </div>
                    <div className='eth-amount'>
                    <label>Counter Party Balance:
                    </label>
                    <input type='text' placeholder='(XX)' onChange={this.onChange}/>

                    </div>
                    <div className='eth-send-button' onClick={this.handleSubmit}>Send</div>
                </div>
            </div>
        );
    }

    private onChange(event: any) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
        console.log("this.setState", ( {...this.state, [name]: value} ));
      }
      private async handleSubmit(event: any) {
        event.preventDefault();
        alert('Submission Pending...');
        const s = this.state as any;
        const id = "testid3";
    
        if(!s.balanceA) s.balanceA = "0.0001";
        if(!s.balanceB) s.balanceB = "0.0001";
        if(!s.partyB) {
          alert('need value for partyB');
          return;
        }
        if(!s.type) s.type = "Ether";
    
        //"0x3afa9e75471ef7d29d58fec49e48d17ba617bba8"
        const options = {
          ID: id,
          agreementId: s.agreementId,
          partyA: this.props.store.netkey,
          partyB: s.partyB,
          balanceA: s.balanceA,
          balanceB: s.balanceB,
          types: [s.type]
        };
        if(parseFloat(options.balanceA) === 0) {
          alert('value can not be 0 for balance A')
          return;
        }
        if(parseFloat(options.balanceB) === 0) {
          alert('value can not be 0 for balance B')
          return;
        }
        if(parseFloat(options.balanceA) >= 0.001) {
          alert('value too large for balance A')
          return;
        }
        if(parseFloat(options.balanceB) >= 0.001) {
          alert('value too large for balance B')
          return;
        }
        // console.log('createAgreement options', options);
        await this.props.store.createChannel(options);
        //const getagreement = await this.props.store
        //const Store = this.props.store;
    
        alert("agreement was submitted");
      }
}

export default EthCreateChannel;
