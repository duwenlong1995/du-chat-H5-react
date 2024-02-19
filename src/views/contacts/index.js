import styles from './index.module.scss';
import FrameView from '@/layout/frame-view';
import { Tabs, Swiper, Image, List } from 'antd-mobile';
import React, { useState, useRef } from 'react';
import { users } from './users';
import { useNavigate } from 'react-router-dom';

function Contacts() {
    // 标签数据
    const tabItems = [
        { title: 'All', key: '所有' },
        { title: 'Important', key: '重要' },
        { title: 'Unread', key: '未读' },
        { title: 'Read', key: '已读' }
    ];
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    // 联系人点击
    const Navigate = useNavigate();
    const peopleClick = (item) => {
        Navigate('/chat', { state: { item, backStatus: false, title: '对话' } });
    };
    const PAGE = (
        <div className={styles.container}>
            <Tabs
                activeKey={tabItems[activeIndex].key}
                onChange={(key) => {
                    const index = tabItems.findIndex((item) => item.key === key);
                    setActiveIndex(index);
                    swiperRef.current?.swipeTo(index);
                }}
            >
                {tabItems.map((item) => (
                    <Tabs.Tab title={item.title} key={item.key} />
                ))}
            </Tabs>
            <Swiper
                direction='horizontal'
                loop
                indicator={() => null}
                ref={swiperRef}
                defaultIndex={activeIndex}
                onIndexChange={(index) => {
                    setActiveIndex(index);
                }}
            >
                <Swiper.Item>
                    <List>
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
                </Swiper.Item>
                <Swiper.Item></Swiper.Item>
                <Swiper.Item></Swiper.Item>
                <Swiper.Item></Swiper.Item>
            </Swiper>
        </div>
    );
    const showTabBar = true;
    const showNavBar = true;
    return <FrameView showTabBar={showTabBar} showNavBar={showNavBar} className={styles.index} cont={PAGE}></FrameView>;
}

export default Contacts;
