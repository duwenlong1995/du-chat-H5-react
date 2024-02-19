/* eslint-disable react/prop-types */
/*
 * @Descripttion:布局组件
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-02 10:30:43
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-04 14:56:09
 */
import './index.scss';
import TabBar from '../tabBar';
import NavBar from '../navBar';
import BottomInput from '../bottomInput';

function FrameView(props) {
    // 自定义class
    let className = 'frame-view';
    if (props && props.className) {
        className += ` ${props.className}`;
    }
    // 是否显示tabbar,默认不展示
    let showTabBar = null;
    if (props && props.showTabBar) {
        showTabBar = props.showTabBar;
        className += ` h-tabBar`;
    }
    const TabBarTmp = showTabBar ? <TabBar></TabBar> : null;
    // 是否显示NavBar,默认不展示
    let showNavBar = null;
    if (props && props.showNavBar) {
        showNavBar = props.showNavBar;
        className += ` h-navBar`;
    }
    const NavBarTmp = showNavBar ? <NavBar></NavBar> : null;
    let showBottomInputBar = null;
    if (props && props.showBottomInputBar) {
        showBottomInputBar = props.showBottomInputBar;
        className += ` h-bottomInput`;
    }
    const BottomInputTmp = showBottomInputBar ? <BottomInput></BottomInput> : null;
    return (
        <div className={className}>
            {NavBarTmp}
            {/* 内容区域 */}
            <div className='frame-view-content'>{props.cont}</div>
            {/* 底部Tabbar */}
            {TabBarTmp}
            {/* 底部输入框 */}
            {BottomInputTmp}
        </div>
    );
}

export default FrameView;
