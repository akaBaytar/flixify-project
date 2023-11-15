import { Fragment } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './components/Root';
import Home from './pages/Home';
import Movies from './pages/Movies';
import TvShows from './pages/TvShows';
import Search from './pages/Search';
import Error from './pages/Error';
import Details from './pages/Details';

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
        {
          path: '/search',
          element: <Search />,
        },
        {
          path: '/details/:genre/:id',
          element: <Details />,
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
