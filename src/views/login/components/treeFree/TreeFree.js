import { memo, Fragment } from 'react';
import CheckBoxFree from '../checkBoxFree/CheckBoxFree';
import styles from './index.module.scss';
import PropTypes from 'prop-types';
import IconFree from '../iconFree/iconFree';

const TreeFree = memo(function TreeFree(props) {
    const { treeData, showCheckbox } = props;
    const clickTreeNode = (e) => {
        console.log(e);
    };
    // 点击图标方法
    const changeIcon = (e) => {
        e.target.style.transform = e.target.style.transform === 'rotate(90deg)' ? 'rotate(0deg)' : 'rotate(90deg)';
        console.log(e.target.style.transform);
        for (const item in e.target.parentNode.parentNode.childNodes) {
            // 点击的时候设置当前层级的子元素素隐藏
            // 操作了DOM,我很难受
            if (item > 0) {
                e.target.parentNode.parentNode.childNodes[item].style.display =
                    e.target.parentNode.parentNode.childNodes[item].style.display === 'none' ? 'block' : 'none';
            }
        }
    };
    // 图标数据
    const icon = (
        <svg
            className='icon'
            viewBox='0 0 1024 1024'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            p-id='1331'
            width='10'
            height='10'
        >
            <path d='M288.791335 65.582671l446.41733 446.417329-446.41733 446.417329z' p-id='1332'></path>
        </svg>
    );
    return (
        <Fragment>
            <div className={styles.TreeFree}>
                {treeData.map((item) => {
                    return (
                        <div key={item.title}>
                            {/* 图标 */}
                            <span
                                className={styles.icon}
                                onClick={(e) => {
                                    changeIcon(e);
                                }}
                            >
                                {item.children && item.children.length > 0 ? <IconFree icon={icon} /> : null}
                            </span>
                            {/* 标题 */}
                            <span
                                className={styles.checkbox}
                                onClick={() => {
                                    clickTreeNode(item);
                                }}
                            >
                                {showCheckbox ? (
                                    <CheckBoxFree content={item.title} key={item.title} />
                                ) : (
                                    <span>{item.title}</span>
                                )}
                                {item.children.map((info) => {
                                    return (
                                        <div
                                            key={info.title}
                                            style={{ paddingLeft: 15 }}
                                            onClick={() => {
                                                clickTreeNode(info);
                                            }}
                                        >
                                            {info.children && info.children.length > 0 ? (
                                                <IconFree icon={icon} style={{ display: 'inline' }} />
                                            ) : null}
                                            <CheckBoxFree content={info.title} key={info.title} />
                                        </div>
                                    );
                                })}
                            </span>
                        </div>
                    );
                })}
            </div>
        </Fragment>
    );
});
TreeFree.propTypes = {
    treeData: PropTypes.array,
    showCheckbox: PropTypes.string
};
export default TreeFree;
