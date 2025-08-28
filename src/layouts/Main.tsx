import { Layout, message } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';

import styles from './Main.module.scss';

const Main = () => {
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <>
      {contextHolder}
      <div className={styles.container}>
        <Layout>
          <Header className={styles.header}>
            <div className={styles.left}>1</div>
            <div className={styles.right}>2</div>
          </Header>
          <Layout className={styles.main}>
            <Content>
              <Outlet />
            </Content>
          </Layout>
        </Layout>

        <Layout>
          <Footer className={styles.footer}>xxx &copy;2025 - present. Created by me</Footer>
        </Layout>
      </div>
    </>
  );
};

export default Main;
