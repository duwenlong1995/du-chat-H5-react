import { memo } from 'react';
import { NavBar, Space } from 'antd-mobile';
import { MoreOutline } from 'antd-mobile-icons';
import { useLocation } from 'react-router-dom';

const navBar = memo(function navBar() {
    const location = useLocation();
    // const { pathname } = location;
    console.log(location);
    const back = () => {
        window.history.back();
    };
    const right = (
        <div style={{ fontSize: 24 }}>
            <Space style={{ '--gap': '16px' }}>
                <MoreOutline color='#2675EC' />
            </Space>
        </div>
    );

    return (
        <div className='layout-navBar'>
            <div className='layout-navBar-div'>
                {/* 根据不同页面显示不同NavBar */}
                {location.pathname === '/chat' ? (
                    <NavBar right={right} onBack={back}>
                        与{location.state.item.name}的{location.state !== null ? location.state.title : null}
                    </NavBar>
                ) : (
                    <NavBar className='indexNav' right={right}>
                        {location.state !== null ? location.state.title : null}
                    </NavBar>
                )}
            </div>
        </div>
    );
});

export default navBar;
