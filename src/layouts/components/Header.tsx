import styles from './Header.module.scss';
import { Dropdown, type MenuProps, Space } from 'antd';
import Avatar from '@/assets/images/avatar.png';
import { DownOutlined, LogoutOutlined, ProfileOutlined, SettingOutlined } from '@ant-design/icons';
import { Header } from 'antd/es/layout/layout';

import { useCommonStore } from '../../hooks/useCommonStore';

const App = () => {
  const { username } = useCommonStore();

  console.log('username: ', username);

  const items: MenuProps['items'] = [
    {
      key: '2',
      label: 'Profile',
      icon: <ProfileOutlined />,
    },
    {
      key: '3',
      label: 'Settings',
      icon: <SettingOutlined />,
    },
    {
      key: '4',
      label: 'Logout',
      icon: <LogoutOutlined />,
    },
  ];
  return (
    <>
      <Header className={styles.header}>
        <div className={styles.left}>
          <img src="/src/assets/react.svg" alt="Logo" />
        </div>

        {username ? (
          <div className={styles.right}>
            <Dropdown menu={{ items }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <div className="flex items-center">
                    <img src={Avatar} alt="Avatar" className="" />
                    <span>{username}</span>
                  </div>
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
        ) : null}
      </Header>
    </>
  );
};

export default App;
