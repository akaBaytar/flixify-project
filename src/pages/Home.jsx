import { Fragment } from 'react';
import Slider from '../components/Slider';

const Home = () => {
  return (
    <Fragment>
      <section className='py-12 px-6 bg-slider'>
        <h2 className='uppercase text-xl font-semibold text-center mb-3'>
          Now Playing
        </h2>
        <Slider />
      </section>
      <div className='container'></div>
    </Fragment>
  );
};

export default Home;