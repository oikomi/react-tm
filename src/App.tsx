import './App.css';

import {HashRouter as Router} from 'react-router-dom';
import {App as AntApp, ConfigProvider, theme} from 'antd';

import {AliveScope} from 'react-activation';
import zhCN from 'antd/es/locale/zh_CN';
import enUS from 'antd/es/locale/en_US';

// antd主题
const {defaultAlgorithm, darkAlgorithm} = theme;

function App() {
  const {i18n} = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <>
      <Router>
        <ConfigProvider locale={currentLanguage === 'en' ? enUS : zhCN}>
          <AntApp>
            <AliveScope>
              <h1>hello</h1>
            </AliveScope>
          </AntApp>
        </ConfigProvider>
      </Router>
    </>
  );
}

export default App;
