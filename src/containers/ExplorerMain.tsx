import * as React from 'react';
import Explorer from '../components/Explorer';
import AgreementDetail from '../components/AgreementDetail';
// import CreateAgreement from '../components/CreateAgreement';
import Channel from '../components/Channel';
import PendingAgreement from '../components/PendingAgreement';
import RevokeAgreement from '../components/RevokeAgreement';
import ChannelDetail from '../components/ChannelDetail';

class ExplorerMain extends React.Component<any, any> {
    

    public render() {
        return (
            <div>
                <Explorer />
                {/* <CreateAgreement /> */}
                <PendingAgreement />
                <RevokeAgreement />
                <AgreementDetail />
                <Channel />
                <ChannelDetail />
            </div>
        );
    }
}

export default ExplorerMain;
