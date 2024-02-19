import { memo } from 'react';
import InputFree from '../InputFree/inputFree';
import styles from './index.module.scss';

const SwitchFree = memo(function SwitchFree(props) {
    const newProps = {
        ...props
        // 添加一个新属性作为示例
    };
    return (
        <div className={styles.toggleBtn}>
            <InputFree className={styles.inputFree} type='checkbox' {...newProps} />
            <span> </span>
        </div>
    );
});

export default SwitchFree;
