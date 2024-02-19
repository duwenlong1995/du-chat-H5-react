import styles from './index.module.scss';
import FrameView from '@/layout/frame-view';
import { Form, Input, Button, Image } from 'antd-mobile';
// import InputFree from './components/InputFree/inputFree';
// import SwitchFree from './components/switchFree/SwitchFree';
// import CheckBoxFree from './components/checkBoxFree/CheckBoxFree';
// import TreeFree from './components/treeFree/TreeFree';
// import { useNavigate } from 'react-router-dom';

function Login() {
    // const navigate = useNavigate();
    const showTabBar = false;
    const showNavBar = false;
    const onFinish = (e) => {
        console.log(e);
    };
    // const TreeFreeData = [
    //     {
    //         title: '水果',
    //         children: [
    //             { title: '苹果', children: [{ title: '红苹果' }, { title: '青苹果' }] },
    //             { title: '香蕉' },
    //             { title: '樱桃' }
    //         ]
    //     },
    //     {
    //         title: '蔬菜',
    //         children: [{ title: '胡萝卜' }, { title: '土豆' }, { title: '西红柿' }]
    //     }
    // ];
    const demoSrc =
        'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9';
    const PAGE = (
        <div className='container'>
            {/* <TreeFree showCheckbox='true' treeData={TreeFreeData} /> */}
            {/* <CheckBoxFree content='水果' /> */}
            {/* <SwitchFree /> */}
            {/* <InputFree type='password' appear='inputWeb' placeholder='请输入信息' /> */}
            <Image src={demoSrc} width={85} height={85} />
            <Form
                onFinish={onFinish}
                layout='horizontal'
                footer={
                    <Button block type='' color='primary' size='large'>
                        提交
                    </Button>
                }
            >
                <Form.Item name='name' label='姓名' rules={[{ required: true, message: '姓名不能为空' }]}>
                    <Input placeholder='请输入姓名' />
                </Form.Item>
                <Form.Item name='address' label='密码' rules={[{ required: true, message: '密码不能为空' }]}>
                    <Input clearable type='password' placeholder='请输入密码' />
                </Form.Item>
            </Form>
        </div>
    );
    return <FrameView className={styles.index} showTabBar={showTabBar} showNavBar={showNavBar} cont={PAGE}></FrameView>;
}

export default Login;
