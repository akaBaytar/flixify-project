import { Fragment } from 'react';

import Slider from '../components/Slider';
import SearchForm from '../components/SearchForm';
import PopularSection from '../components/Popular';

const TvShows = () => {
  return (
    <Fragment>
      <div className='container'>
        <SearchForm />
        <section className='my-12'>
          <h2 className='uppercase text-3xl font-semibold text-center mb-6'>On the Air</h2>
          <Slider />
        </section>
        <h2 className='uppercase text-3xl font-semibold text-center mb-6'>Popular TV Shows</h2>
        <PopularSection />
      </div>
    </Fragment>
  );
};

export default TvShows;
