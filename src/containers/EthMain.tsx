import * as React from 'react';
import Eth from '../components/Eth';
import EthCreateChannel from '../components/EthCreateChannel';


class EthMain extends React.Component<any, any> {


    public render() {
        return (
            <div>
                <Eth />
                <EthCreateChannel />
                
            </div>
        );
    }
}

export default EthMain;
