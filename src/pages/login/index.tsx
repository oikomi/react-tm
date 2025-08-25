import { setTitle } from '../../utils/helper.ts';

import { Button, Checkbox, Flex, Form, type FormProps, Input, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import styles from './index.module.scss';

const Login = () => {
  const { t, i18n } = useTranslation();
  const [messageApi, contextHolder] = message.useMessage();
  // 语言切换修改title
  useEffect(() => {
    setTitle(t, t('login.login'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language]);

  const [form] = Form.useForm();
  const [clientReady, setClientReady] = useState<boolean>(false);

  // To disable submit button at the beginning.
  useEffect(() => {
    setClientReady(true);
  }, []);

  const onFinish = (values: any) => {
    console.log('Finish:', values);
    try {
      // setLoading(true);
      // const { code, data } = await login(values);
      // if (Number(code) !== 200) return;
      // const { token, user, permissions } = data;
      //
      // // 处理记住我逻辑
      // const passwordObj = { value: values.password, expire: 0 };
      // handleRemember(values.username, encryption(passwordObj));
      //
      // if (!permissions?.length || !token) {
      //   return messageApi.error({ content: t('login.notPermissions'), key: 'permissions' });
      // }
      //
      // setToken(token);
      // setUserInfo(user);
      // setPermissions(permissions);
      // handleGoMenu(permissions);
    } finally {
      // setLoading(false);
    }
  };

  const handleFinishFailed: FormProps['onFinishFailed'] = (errors) => {
    console.error('错误信息:', errors);
    return messageApi.error({ content: errors.values.content, key: 'system' });
  };

  return (
    <>
      {contextHolder}

      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.left}>
            <span className={styles.sidelogo}>
              {' '}
              <img
                src="https://cdn.casbin.org/img/casdoor-logo_1185x256.png"
                alt="Casdoor"
                style={{ width: 120 }}
              />
              <span>SSO</span>
            </span>
            <div className={styles.img}>
              <img src="https://cdn.casbin.org/img/casbin.svg" alt="Casdoor" />
            </div>
          </div>
          <div className={styles.right}>
            <h1>{t('login.login')}</h1>
            <Form
              className={styles.form}
              name="login"
              initialValues={{ remember: true }}
              // style={{ maxWidth: 360 }}
              onFinish={onFinish}
              onFinishFailed={handleFinishFailed}
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}
              >
                <Input prefix={<UserOutlined />} placeholder="Username" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
              >
                <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
              </Form.Item>
              <Form.Item>
                <Flex justify="space-between" align="center">
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>
                  <a href="">Forgot password</a>
                </Flex>
              </Form.Item>

              <Form.Item>
                <Button block type="primary" htmlType="submit">
                  Log in
                </Button>
                or <a href="">Register now!</a>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
