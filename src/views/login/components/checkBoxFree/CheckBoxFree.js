import { memo } from 'react';
import InputFree from '../InputFree/inputFree';
import styles from './index.module.scss';
import PropTypes from 'prop-types';

const CheckBoxFree = memo(function CheckBoxFree(props) {
    const newProps = {
        ...props
        // 添加一个新属性作为示例
    };
    const { content } = props;
    return (
        <div className={styles.toggleBtn}>
            <InputFree className={styles.checkBoxFree} type='checkbox' {...newProps} />
            <span>{content}</span>
        </div>
    );
});
CheckBoxFree.propTypes = {
    content: PropTypes.string
};
export default CheckBoxFree;
