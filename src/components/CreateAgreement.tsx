import * as React from 'react';

class CreateAgreement extends React.Component {
    
    public render() {
        return (
            <div className="create-agreement">
                <h1>Explorer / Create Agreement</h1>
                <form className='agreement-form'>
                    <label>Counter Party Address:
                        <input type="text" placeholder="(0x...)"/>
                    </label>
                    <label>
                        Initial Type:
                        <select>
                            <option selected={true} disabled={true}>Choose One</option>
                            <option>ETH</option>
                            <option>Hashlock</option>
                            <option>Token</option>
                            <option>Object</option>
                        </select>
                    </label>
                    <label>Counter Party State:
                        <input type="text" placeholder="(XX)"/>
                    </label>
                    <label>Your State:
                        <input type="text" placeholder="(XX)"/>
                    </label>
                    <div className='submit'>
                        <button type="submit">Submit</button>
                    </div>
                </form>
                
            </div>
        );
    }
}

export default CreateAgreement;
