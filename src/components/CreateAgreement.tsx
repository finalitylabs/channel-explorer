import * as React from 'react';
import { observer, inject } from 'mobx-react';
import Wallet from "../models/Wallet";
@inject("wallet")
@observer
class CreateAgreement extends React.Component<{ wallet: typeof Wallet.Wallet.Type }> {
    public render() {
        console.log( 'props', this.props );
        const onChange = this.onChange.bind(this);
        return (
            <div className="create-agreement">
                <h1>Explorer / Create Agreement</h1>
                <form className='agreement-form' onSubmit={ (e) => this.handleSubmit(e) }>
                    <label>Counter Party Address:
                        <input type="text" placeholder="(0x...)" name="partyB" onChange={onChange}/>
                    </label>
                    <label>
                        Initial Type:
                        <select onChange={onChange} name="type">
                            <option selected={true} disabled={true}>Choose One</option>
                            <option>ETH</option>
                            <option>Hashlock</option>
                            <option>Token</option>
                            <option>Object</option>
                        </select>
                    </label>
                    <label>Counter Party State:
                        <input type="text" placeholder="(XX)" name="balanceB" onChange={onChange}/>
                    </label>
                    <label>Your State:
                        <input type="text" placeholder="(XX)" name="balanceA" onChange={onChange}/>
                    </label>
                    <div className='submit'>
                        <button type="submit">Submit</button>
                    </div>
                </form>
                
            </div>
        );
    }
    private onChange(event:any) {
        /*
        ID: string;
        partyA: string;
        partyB: string;
        balanceA: string;
        balanceB: string;
        */
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }    
    private async handleSubmit(event:any) {
        event.preventDefault();
        console.log(this.state);
        const s = this.state as any;
        const id = 'testid';
        const options = {
            ID: id,
            partyA: '0x3afa9e75471ef7d29d58fec49e48d17ba617bba8',
            partyB: s.partyB,
            balanceA: s.balanceA,
            balanceB: s.balanceB
        }
        await this.props.wallet.createAgreement(options);
        //const getagreement = await this.props.wallet
        //const wallet = this.props.wallet;
        
        alert('agreement was submitted');
        
    }
}

export default CreateAgreement;
