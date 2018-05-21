import * as React from 'react';

import  {BrowserRouter as Router,
        Route,
        Switch} from 'react-router-dom';


import Channel from './Channel';
import Explorer from './Explorer';
import CreateAgreement from './CreateAgreement';
import PendingAgreement from './PendingAgreement';
import RevokeAgreement from './RevokeAgreement';
import AgreementDetail from './AgreementDetail';
import Eth from './Eth';
import Hashlock from './Hashlock';
import Tokens from './Tokens';
import Objects from './Objects';
import ChannelDetail from './ChannelDetail';
import EthCreateChannel from './EthCreateChannel';




class Main extends React.Component {
    public render() {
        return (
            
                <div className='main-wrapper'>
                    <Switch>
                        <Route path='/' exact={true} strict={true} component={Explorer} />
                        <Route path='/eth' exact={true} strict={true} component={Eth} />
                        <Route path='/hashlock' exact={true} strict={true} component={Hashlock} />
                        <Route path='/tokens' exact={true} strict={true} component={Tokens} />
                        <Route path='/objects' exact={true} strict={true} component={Objects} />
                        <Route path='/channel-detail' exact={true} strict={true} component={ChannelDetail} />
                        <Route path='/create-agreement' exact={true} strict={true} component={CreateAgreement} />
                        <Route path='/pending-agreement' exact={true} component={PendingAgreement} />
                        <Route path='/recoke-agreement' exact={true} component={RevokeAgreement} />
                        <Route path='/agreement-detail' exact={true} component={AgreementDetail} />
                        <Route path='/eth-create-channel' excact={true} component={EthCreateChannel} />
                        {/* <Channel /> */}
                        {/* <CreateAgreement /> */}
                        {/* <PendingAgreement /> */}
                        {/* <RevokeAgreement /> */}
                        {/* <AgreementDetail /> */}
                    </Switch>
                </div>
           
        );
    }
}

export default Main;
