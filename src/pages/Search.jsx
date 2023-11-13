import { Fragment } from 'react';
import { useLocation } from 'react-router-dom';

import useFetch from '../hooks/useFetch';

function Search() {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('query');

  const { data } = useFetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchQuery}`
  );

  return (
    <Fragment>
      <div className='container'>
        <h2 className='my-3 text-2xl'>Search Results for: {searchQuery}</h2>
        <div className='grid gap-6 mb-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {data?.results.map(
            ({
              id,
              original_title,
              poster_path,
              release_date,
              vote_average,
            }) => (
              <div key={id} className='p-3 rounded-lg bg-[#0f0f0f]'>
                <img
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={original_title}
                  className='rounded-lg'
                />
                <h3 className='mt-3 text-lg font-bold'>{original_title}</h3>
                <h4 className='text-sm'> Release Date: {release_date} </h4>
                <h4 className='text-sm'> Vote: {vote_average.toFixed(1)} </h4>
              </div>
            )
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default Search;
