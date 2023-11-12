import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const Root = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Root;
