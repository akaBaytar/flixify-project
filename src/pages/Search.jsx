import { Fragment, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Search() {
  const [movies, setMovies] = useState([]);

  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const searchQuery = queryParams.get('query');
  const selectedOption = queryParams.get('option');

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/${selectedOption}?query=${searchQuery}&api_key=${
          import.meta.env.VITE_API_KEY
        }`
      );

      const data = await response.json();
      setMovies(data.results);
    };

    fetchMovies();
  }, [searchQuery, selectedOption]);

  return (
    <Fragment>
      <div className='container'>
        <h2 className='my-3 text-2xl'>Search Results for: {searchQuery}</h2>
        <div className='grid gap-6 mb-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {movies.map(
            ({
              id,
              original_title,
              poster_path,
              release_date,
              vote_average,
            }) => (
              <Link key={id} to={`/details/${id}`}>
                <div className='p-3 rounded-lg bg-[#0f0f0f]'>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={original_title}
                    className='rounded-lg'
                  />
                  <h3 className='mt-3 text-lg font-bold'>{original_title}</h3>
                  <h4 className='text-sm'> Release Date: {release_date} </h4>
                  <h4 className='text-sm'> Vote: {vote_average.toFixed(1)} </h4>
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default Search;
