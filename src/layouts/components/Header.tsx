import styles from './Header.module.scss';
import { Dropdown, type MenuProps, Space } from 'antd';
import Avatar from '@/assets/images/avatar.png';
import {
  DownOutlined,
  ExclamationCircleOutlined,
  LogoutOutlined,
  ProfileOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Header } from 'antd/es/layout/layout';

import { useCommonStore } from '../../hooks/useCommonStore';
import { modal } from '@/network/message.ts';

type MenuKey = 'password' | 'logout';

const App = () => {
  const { username } = useCommonStore();
  const [handleLogout] = useLogout();

  console.log('username: ', username);

  const onClick: MenuProps['onClick'] = (e) => {
    switch (e.key as MenuKey) {
      case 'logout':
        onLogout();
        break;

      default:
        break;
    }
  };

  const onLogout = () => {
    modal.confirm({
      title: 'confirm',
      icon: <ExclamationCircleOutlined />,
      content: 'logout',
      onOk() {
        handleLogout();
      },
    });
  };

  const items: MenuProps['items'] = [
    {
      key: '2',
      label: 'profile',
      icon: <ProfileOutlined className="mr-1" />,
    },
    {
      key: '3',
      label: 'settings',
      icon: <SettingOutlined className="mr-1" />,
    },
    {
      key: 'logout',
      label: 'logout',
      icon: <LogoutOutlined className="mr-1" />,
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
            <Dropdown menu={{ items, onClick }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <div className="flex items-center">
                    <img src={Avatar} alt="Avatar" className="mr-4 w-8 h-8" />
                    <span className="ml-2 text-15px min-w-50px truncate">{username}</span>
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
