import { memo } from 'react';
import { TabBar, Badge } from 'antd-mobile';
import { AppOutline, MessageOutline, UnorderedListOutline, UserOutline } from 'antd-mobile-icons';
import { useNavigate, useLocation } from 'react-router-dom';

const tabBar = memo(function tabBar() {
    const navigate = useNavigate();
    const location = useLocation();
    const { pathname } = location;
    const tabs = [
        {
            key: '/index',
            title: '首页',
            icon: <AppOutline />,
            badge: Badge.dot
        },
        {
            key: '/contacts',
            title: '联系人',
            icon: <UnorderedListOutline />,
            badge: '5'
        },
        {
            key: '/message',
            title: '消息',
            icon: <MessageOutline />,
            badge: '99+'
        },
        {
            key: '/mine',
            title: '我的',
            icon: <UserOutline />
        }
    ];
    const setRouteActive = (value) => {
        const titleFn = () => {
            if (value === '/index') {
                return '首页';
            } else if (value === '/contacts') {
                return '联系人';
            } else if (value === '/message') {
                return '消息';
            } else if (value === '/mine') {
                return '我的';
            }
        };
        navigate(value, { state: { title: titleFn() } });
    };
    return (
        <div className='layout-tabBar'>
            <div className='layout-tabBar-div'>
                <TabBar activeKey={pathname} onChange={(value) => setRouteActive(value)}>
                    {tabs.map((item) => (
                        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
                    ))}
                </TabBar>
            </div>
        </div>
    );
});
export default tabBar;
