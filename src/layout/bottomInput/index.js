import { memo } from 'react';
import InputFree from './components/InputFree/inputFree';
import PlusImage from '@/assets/img/input/Plus.png';
import RectangleImage from '@/assets/img/input/Rectangle 68.png';
import VectorImage from '@/assets/img/input/Vector.png';

const BottomInput = memo(function BottomInput() {
    return (
        <div className='bottomInput'>
            <div className='container'>
                <div className='input'>
                    <InputFree placeholder='Type your message...' appear='inputMobile' />
                </div>
                <div className='rightButton'>
                    <img src={PlusImage} />
                    <img src={VectorImage} />
                    <img src={RectangleImage} />
                </div>
            </div>
        </div>
    );
});

export default BottomInput;
