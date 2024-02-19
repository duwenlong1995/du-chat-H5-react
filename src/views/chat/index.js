import { useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Image } from 'antd-mobile';
import styles from './index.module.scss';
import FrameView from '@/layout/frame-view';
import { CSSTransition } from 'react-transition-group';
import Empty from '@/assets/img/base/20210317_194203.jpg';

// export const MyContext = createContext({
//     image: 'abc',
//     name: 'abc',
//     status: 'abc'
// });
function Chat() {
    const location = useLocation();
    const navigate = useNavigate();
    // const params = location.state;
    const [show] = useState(true);
    const scrollRef = useRef(null);
    const [messages] = useState([
        {
            index: 1,
            message: 'Hi, son, how are you doing? Today, my father and I went to buy a car, bought a cool car.',
            fromSelf: false
        },
        { index: 2, message: 'Oh! Cool Send me photo', fromSelf: true },
        {
            index: 3,
            image: Empty
        }
    ]);
    // 创建上下文
    const PAGE = (
        // <MyContext.Provider value={params}>
        // {/* 聊天区域 */}
        <div className={styles.chatMessages}>
            {messages.map((item) => {
                console.log(item.fromSelf);
                return (
                    <div ref={scrollRef} key={item.index}>
                        <div className={`${styles.message} ${item.fromSelf ? styles.sended : styles.recieved}`}>
                            {/* 文字 */}
                            <div className={styles.content} style={{ display: item.message ? 'block' : 'none' }}>
                                <p>{item.message}</p>
                            </div>
                            {/* 图片 */}
                            <div className={styles.image} style={{ display: item.image ? 'block' : 'none' }}>
                                <Image src={item.image} fit='scale-down' />
                            </div>
                            {/* 视频 */}
                            <div className={styles.video} style={{ display: item.video ? 'block' : 'none' }}>
                                <video />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
        // </MyContext.Provider>
    );
    const showTabBar = false;
    const showNavBar = true;
    const showBottomInputBar = true;

    return (
        <>
            <CSSTransition
                classNames={{ ...styles }}
                key={location.pathname}
                // in：表示控制默认是否显示
                in={show}
                appear={true}
                //  timeout：动画所持续的时间，单位：毫秒
                timeout={300}
                // unmountOnExit：在元素退出的时候删除对应的DOM
                unmountOnExit
                onExited={navigate.goBack}
            >
                <FrameView
                    showBottomInputBar={showBottomInputBar}
                    showTabBar={showTabBar}
                    showNavBar={showNavBar}
                    className={styles.index}
                    cont={PAGE}
                ></FrameView>
            </CSSTransition>
        </>
    );
}
export default Chat;
