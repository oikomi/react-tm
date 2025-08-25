import { Layout } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';

import styles from './Main.module.scss';

const Main = () => {
  return (
    <>
      <Layout>
        <Header className={styles.header}>
          <div className={styles.left}></div>
          <div className={styles.right}></div>
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
    </>
  );
};

export default Main;
