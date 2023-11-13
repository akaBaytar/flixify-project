import { Fragment } from 'react';

import Slider from '../components/Slider';
import SearchForm from '../components/SearchForm';
import PopularSection from '../components/Popular';

const Home = () => {
  return (
    <Fragment>
      <section className='py-12 px-6 bg-slider'>
        <h2 className='uppercase text-3xl font-semibold text-center mb-12'>
          Now Playing
        </h2>
        <Slider />
      </section>
      <div className='container'>
        <SearchForm />
        <h2 className='uppercase text-3xl font-semibold text-center mb-3'>
          Popular Movies
        </h2>
        <PopularSection />
      </div>
    </Fragment>
  );
};

export default Home;
