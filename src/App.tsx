import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { GameSettings } from './pages/GameSettings/GameSettings';
import { Game } from './pages/Game/Game';

const router = createBrowserRouter([
  {
    path: '/',
    element: <GameSettings />,
  },
  {
    path: '/game',
    element: <Game />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
