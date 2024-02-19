import { memo } from 'react';
import styles from './index.module.scss';
import PropTypes from 'prop-types';

const IconFree = memo(function IconFree(props) {
    const { icon } = props;
    return <span className={styles.svgIcon}>{icon}</span>;
});
IconFree.propTypes = {
    icon: PropTypes.object
};
export default IconFree;
