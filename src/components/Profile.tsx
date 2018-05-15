import * as React from 'react';
import '../App.css';

class Profile extends React.Component {
   

    public render() {
        return (
            
            <div className='profile-container'>
            <div className='pic-box'/>
                <div>
                    <h3>Account</h3>
                    <p>0x...</p>
                </div>
                <div className='balance thick'>
                    <h3>Balance</h3>
                    
                </div>
                <div className='title-value thick'>
                    <h3>ETH</h3>
                    <p>XX</p>
                </div>
                
                <div className='dotted'>
                    <h3>Tokens</h3>
                </div>
     
                <div className='title-value dotted'>
                    <p className='indent'>Spank</p>
                    <p>XX</p>
                </div>

                <div className='title-value thick'>
                    <p className='indent'>FNT</p>
                    <p>XX</p>
                </div>
             
                <div className='dotted'>
                    <h3>Objects</h3>
                </div>
                <div className='title-value dotted'>
            
                    <p className='indent'>Heroes</p>
                    <p>XX</p>
                </div>
                

            </div>
        
        );
    }
};

export default Profile;