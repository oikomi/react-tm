import { Layout, message } from 'antd';
import { Content, Footer } from 'antd/es/layout/layout';

import styles from './index.module.scss';
import Header from './components/Header';

const App = () => {
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <>
      {contextHolder}
      <div className={styles.container}>
        <Layout>
          <Header />
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

export default App;
