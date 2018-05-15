import * as React from 'react';
import Navigation from './Navigation';
import Explorer from './Explorer';


class Main extends React.Component {
    public render() {
        return (
            <div className='main-wrapper'>
                <Navigation />
                <Explorer />
            </div>
        );
    }
}

export default Main;
