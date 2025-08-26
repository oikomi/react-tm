import { type RouteObject } from 'react-router-dom';
import Main from '../layouts/Main.tsx';
import Login from '../pages/login';
import Home from '../pages/home';
import NotFound from '../pages/404.tsx';
import Guards from './components/Guards.tsx';

//
export const HOME_PATH = '/';
export const LOGIN_PATH = 'login';

const routerConfig: RouteObject[] = [
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: HOME_PATH,
        element: <Home />,
      },
      {
        path: LOGIN_PATH,
        element: <Login />,
      },
    ],
  },
  {
    path: '',
    element: <Guards />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

function App() {
  return <>{useRoutes(routerConfig)}</>;
}

export default App;
