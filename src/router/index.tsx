import { type RouteObject } from 'react-router-dom';
import Index from '@/layouts';
import Login from '@/pages/login';
import Home from '@/pages/home';
import NotFound from '@/pages/404';

import Chat from '@/pages/chat';

//
export const HOME_PATH = '/';
export const LOGIN_PATH = 'login';
export const CHAT_PATH = 'chat';

const routerConfig: RouteObject[] = [
  {
    path: '/',
    element: <Index />,
    children: [
      {
        path: HOME_PATH,
        element: <Home />,
      },
      {
        path: LOGIN_PATH,
        element: <Login />,
      },
      {
        path: CHAT_PATH,
        element: <Chat />,
      },
    ],
  },
  // {
  //   path: '',
  //   element: <Guards />,
  // },
  {
    path: '*',
    element: <NotFound />,
  },
];

function App() {
  return <>{useRoutes(routerConfig)}</>;
}

export default App;
