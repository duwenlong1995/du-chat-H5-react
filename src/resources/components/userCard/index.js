import { memo } from 'react';
import { Image } from 'antd-mobile';
import './index.scss';

const UserCard = memo(function UserCard() {
    const demoSrc =
        'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9';
    return (
        <>
            <div className='userCard'>
                <div className='image'>
                    <Image src={demoSrc} width={85} height={85} />
                </div>
                <div className='detail'>
                    <div>Gloria Mckinney</div>
                    <div>+375(29)9638433</div>
                </div>
            </div>
        </>
    );
});
export default UserCard;
