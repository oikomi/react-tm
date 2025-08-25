import { createHashRouter } from 'react-router-dom';
import Main from '../layouts/Main.tsx';
import Login from '../pages/login';

const routerConfig = createHashRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
]);
