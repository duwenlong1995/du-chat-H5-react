import styles from './index.module.scss';
import FrameView from '@/layout/frame-view';
// import { useNavigate } from 'react-router-dom';

function userDetail() {
    const showTabBar = true;
    const showNavBar = true;
    const PAGE = <div className={styles.container}></div>;
    return <FrameView showTabBar={showTabBar} showNavBar={showNavBar} className={styles.index} cont={PAGE}></FrameView>;
}

export default userDetail;
