import styles from './index.module.scss';
import FrameView from '@/layout/frame-view';
import UserCard from '@/resources/components/userCard';
import Account from './components/account';
// import { useNavigate } from 'react-router-dom';

function Mine() {
    // const navigate = useNavigate();
    const showTabBar = true;
    const showNavBar = true;
    const PAGE = (
        <div className={styles.container}>
            <UserCard />
            <Account />
            <Account />
            <Account />
        </div>
    );
    return <FrameView showTabBar={showTabBar} showNavBar={showNavBar} className={styles.index} cont={PAGE}></FrameView>;
}

export default Mine;
