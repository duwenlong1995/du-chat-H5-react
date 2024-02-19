// import { memo, useMemo } from 'react';
// import styles from './index.module.scss';
// import PropTypes from 'prop-types';

// const formFree = memo(function formFree(props) {
//     // 在这里可以添加额外的属性或逻辑
//     const newProps = {
//         ...props
//         // 添加一个新属性作为示例
//     };
//     const { radius, appear, filter } = props;
//     // 动态类
//     const styleType = useMemo(() => {
//         if (appear === 'inputMobile') {
//             return styles.inputMobile;
//         } else if (appear === 'inputWeb') {
//             return styles.inputWeb;
//         } else {
//             return null;
//         }
//     }, [appear]);
//     const styleFilter = useMemo(() => {
//         if (filter) {
//             return styles.filter;
//         }
//     }, [filter]);
//     const className = `${styles.input} ${styleType} ${styleFilter}`;
//     return (
//         <>
//             <from className={className} style={{ borderRadius: radius + 'px' }} {...newProps} />
//         </>
//     );
// });
// formFree.propTypes = {
//     // radius: PropTypes.number,
// };

// export default formFree;
