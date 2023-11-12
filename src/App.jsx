import { Fragment } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './components/Root';
import Home from './pages/Home';
import Movies from './pages/Movies';
import TvShows from './pages/TvShows';
import Error from './pages/Error';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/movies',
          element: <Movies />,
        },
        {
          path: '/tv-shows',
          element: <TvShows />,
        },
      ],
    },
  ]);
  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
}

export default App;
