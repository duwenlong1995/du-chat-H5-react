import { useState } from 'react';
import styles from './index.module.scss';
import FrameView from '@/layout/frame-view';
// import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, ImageUploader, Dialog } from 'antd-mobile';
import { PictureOutline } from 'antd-mobile-icons';

function Register() {
    // const navigate = useNavigate();
    const showTabBar = false;
    const showNavBar = false;
    const onFinish = (e) => {
        console.log(e);
    };
    // 限制上传图片数量
    const maxCount = 1;
    const [fileList, setFileList] = useState([
        {
            url: ''
        }
    ]);
    console.log(fileList);

    const mockUpload = async (file) => {
        // const uid = uuidv4();
        // const reslutIndex = Array.from(file.name).findLastIndex((item) => item === '.');
        // const fileName = uid + file.name.slice(reslutIndex, file.name.length);
        let token;
        // if (uploadType === 1) {
        //     token = uploadImgGetTokenFromLocalStorage();
        // } else if (uploadType === 2) {
        //     token = uploadGetTokenFromLocalStorageForH5();
        // } else {
        //     token = uploadImgGetTokenFromLocalStorage();
        // }
        const data = new FormData();
        data.append('file', file);
        // data.append('key', `${imgDir}/${filePrefix ? filePrefix + '-' : ''}${fileName}`);
        // data.append('fname', fileName);
        data.append('token', token);
        // await axios({
        //     url: urls.light.uploadToCDN,
        //     method: 'post',
        //     data
        // }).then((res) => {
        //     if (res.data.code === 200) {
        //         typeof onChange === 'function' && onChange(res.data.data.key);
        //     }
        // });
    };
    const PAGE = (
        <div className='container'>
            <ImageUploader
                value={fileList}
                maxCount={maxCount}
                onChange={setFileList}
                upload={mockUpload}
                onDelete={() => {
                    return Dialog.confirm({
                        content: '是否确认删除'
                    });
                }}
                style={{ marginBottom: '40px' }}
            >
                <div
                    style={{
                        display: fileList ? 'block' : 'none',
                        width: 80,
                        height: 80,
                        borderRadius: 40,
                        backgroundColor: '#f5f5f5',
                        position: 'relative',
                        color: '#999999'
                    }}
                >
                    <PictureOutline
                        style={{
                            position: 'absolute',
                            left: '50%',
                            top: '50%',
                            transform: 'translate(-50%,-50%)',
                            fontSize: 32
                        }}
                    />
                </div>
            </ImageUploader>
            <Form
                onFinish={onFinish}
                layout='horizontal'
                footer={
                    <Button block type='submit' color='primary' size='large'>
                        注册
                    </Button>
                }
            >
                <Form.Item name='name' label='姓名' rules={[{ required: true, message: '姓名不能为空' }]}>
                    <Input placeholder='请输入姓名' />
                </Form.Item>
                <Form.Item name='password' label='密码' rules={[{ required: true, message: '密码不能为空' }]}>
                    <Input clearable type='password' placeholder='请输入密码' />
                </Form.Item>
                <Form.Item name='rePassword' label='确认密码' rules={[{ required: true, message: '密码不能为空' }]}>
                    <Input clearable type='password' placeholder='请输入密码' />
                </Form.Item>
            </Form>
        </div>
    );
    return <FrameView className={styles.index} showTabBar={showTabBar} showNavBar={showNavBar} cont={PAGE}></FrameView>;
}

export default Register;
