import { Fragment, useEffect, useState } from 'react';

const Popular = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchMovies = async (page) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${
        import.meta.env.VITE_API_KEY
      }&page=${page}`
    );

    const data = await response.json();
    setMovies(data.results);
    setTotalPages(data.total_pages);
  };

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage]);

  return (
    <Fragment>
      <div className='grid gap-6 mb-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {movies.map(
          ({ id, original_title, poster_path, release_date, vote_average }) => (
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
      <div className='flex gap-6 justify-center mb-12'>
        <button
          className='px-6 border-2 rounded-lg'
          onClick={() =>
            setCurrentPage((prevState) => Math.max(prevState - 1, 1))
          }>
          Prev
        </button>
        <span className='text-xl px-3 py-1 border-2 rounded-lg'>
          {currentPage}
        </span>
        <button
          className='px-6 border-2 rounded-lg'
          onClick={() =>
            setCurrentPage((prevState) => Math.min(prevState + 1, totalPages))
          }>
          Next
        </button>
      </div>
    </Fragment>
  );
};

export default Popular;
