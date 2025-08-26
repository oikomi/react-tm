import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import { HOME_PATH } from '../router';

function App() {
  const navigate = useNavigate();

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={() => navigate(HOME_PATH)}>
          Back Home
        </Button>
      }
    />
  );
}
export default App;
