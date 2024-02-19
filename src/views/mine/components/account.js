import { memo } from 'react';
import './index.scss';

const Account = memo(function Account() {
    return (
        <>
            <h4>Account</h4>
            <div className='account'>
                <p className='phone'>+375(29)9638433</p>
                <p className='tips'>Tap to change phone number</p>
            </div>
            <div className='line'></div>
        </>
    );
});
export default Account;
