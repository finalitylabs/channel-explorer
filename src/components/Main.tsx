import * as React from 'react';
import Navigation from './Navigation';
import Channel from './Channel';
import Explorer from './Explorer';
import CreateAgreement from './CreateAgreement';
import PendingAgreement from './PendingAgreement';


class Main extends React.Component {
    public render() {
        return (
            <div className='main-wrapper'>
                <Navigation />
                {/* <Channel /> */}
                {/* <Explorer /> */}
                {/* <CreateAgreement /> */}
                <PendingAgreement />
            </div>
        );
    }
}

export default Main;
