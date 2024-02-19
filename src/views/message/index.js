import styles from './index.module.scss';
import FrameView from '@/layout/frame-view';
import { Image, List } from 'antd-mobile';
import { users } from '../contacts/users';
import { useNavigate } from 'react-router-dom';

function Message() {
    // const navigate = useNavigate();
    const showTabBar = true;
    const showNavBar = true;
    // 联系人点击
    const Navigate = useNavigate();
    const peopleClick = (item) => {
        Navigate('/chat', { state: { item, backStatus: false, title: '对话' } });
    };
    const PAGE = (
        <div className={styles.container}>
            <List header='用户列表'>
                {users.map((user) => (
                    <List.Item
                        onClick={() => {
                            peopleClick(user);
                        }}
                        key={user.name}
                        prefix={
                            <Image
                                src={user.avatar}
                                style={{ borderRadius: 25 }}
                                fit='cover'
                                width={70}
                                height={70}
                                lazy
                            />
                        }
                        description={user.description}
                    >
                        {user.name}
                    </List.Item>
                ))}
            </List>
        </div>
    );
    return <FrameView showTabBar={showTabBar} showNavBar={showNavBar} className={styles.index} cont={PAGE}></FrameView>;
}

export default Message;
