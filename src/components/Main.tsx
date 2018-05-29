import * as React from 'react';




import Hashlock from './Hashlock';
import Tokens from './Tokens';
import Objects from './Objects';



import Store from "../models/Store";
// import * as SRouter from 'mst-react-router';

// const { RouterModel, syncHistoryWithStore } = SRouter
import { observer } from 'mobx-react';
import Navigation from './Navigation';
import ExplorerMain from '../containers/ExplorerMain';
import EthMain from '../containers/EthMain';

@observer
class Main extends React.Component<{ Store: typeof Store.Store.Type }> {
    
    public render() {
        return (
                <div className='main-wrapper'>
                    
                    <Navigation />
            
                    
                        <div>
                            <ExplorerMain />
                            <EthMain />
                            <Hashlock />
                            <Tokens />
                            <Objects />
                            
                        </div>
                    
                </div>
           
        );
    }
}

export default Main;
