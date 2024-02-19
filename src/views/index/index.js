import styles from './index.module.scss';
import FrameView from '@/layout/frame-view';
// import { useNavigate } from 'react-router-dom';

function Index() {
    // const navigate = useNavigate();
    const a = [
        1, 2, 3, 4, 5, 6, 5, 6, 5, 5, 435, 4, 3, 3, 45, 34, 5, 34, 53, 4, 3, 4, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 88,
        8, 88, 8, 88, 8, 88, 8, 8, 88, 8
    ];
    const showTabBar = true;
    const showNavBar = true;
    const PAGE = (
        <div className={styles.container}>
            {a.map((item, index) => {
                return <div key={index}>{item}</div>;
            })}
        </div>
    );
    return <FrameView showTabBar={showTabBar} showNavBar={showNavBar} className={styles.index} cont={PAGE}></FrameView>;
}

export default Index;
