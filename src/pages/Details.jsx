import { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { StarFill } from 'react-bootstrap-icons';

const Details = () => {
  const [details, setDetails] = useState([]);

  const { id } = useParams();

  const {
    backdrop_path,
    budget,
    genres,
    homepage,
    original_title,
    overview,
    poster_path,
    production_companies,
    production_countries,
    release_date,
    revenue,
    runtime,
    status,
    tagline,
    title,
    vote_average,
  } = details;

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${
          import.meta.env.VITE_API_KEY
        }`
      );

      const data = await response.json();

      setDetails(data);
    };

    fetchDetails();
  }, [id]);

  return (
    <Fragment>
      <div
        className='background'
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
        }}>
        <div className='container'>
          <div className='flex flex-col md:flex-row gap-12 items-center py-12'>
            <div className='xl:flex-1'>
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={original_title}
                className='rounded-xl'
              />
            </div>
            <div className='sm:pl-4 md:w-2/3 xl:flex-1'>
              <h2 className='text-4xl font-bold'>{original_title}</h2>
              <h3 className='mt-1 italic text-sm'>{title}</h3>
              <span className='flex gap-1 mt-4'>
                <StarFill className='text-lg text-yellow-500' />
                {vote_average?.toFixed(1)} / 10
              </span>
              <span className='mt-2'>Release Date: {release_date}</span>
              <p className='text-xl italic font-mono mt-4 pt-2'>{tagline}</p>
              <p className='mt-4 text-sm'>{overview}</p>
              <h4 className='mt-4 mb-1 text-lg font-semibold'>Genres</h4>
              {genres?.length !== 0 ? (
                genres?.map(({ id, name }) => (
                  <span
                    key={id}
                    className='mr-2 py-1 px-4 rounded-lg text-xs bg-black'>
                    {name}
                  </span>
                ))
              ) : (
                <span className='text-xs italic'>
                  There is no information about the genre.
                </span>
              )}
              <a
                href={homepage}
                target='_blank'
                rel='noreferrer'
                className='block w-52 text-center mt-4 px-8 py-4 border-2 rounded-xl'>
                Visit Homepage
              </a>
              <h4 className='mt-8 text-2xl font-semibold'>Stat for nerds</h4>
              <p className='mt-1 text-sm'>
                <span className='text-yellow-500'>Budget:</span> $
                {budget?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </p>
              <p className='text-sm'>
                <span className='text-yellow-500'>Revenue:</span> $
                {revenue?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </p>
              <p className='text-sm'>
                <span className='text-yellow-500'>Runtime:</span> {runtime}{' '}
                minutes
              </p>
              <p className='text-sm'>
                <span className='text-yellow-500'>Status:</span> {status}
              </p>
              <h5 className='mt-4 text-lg font-semibold'>
                Production Companies
              </h5>
              {production_companies?.map(({ id, name }) => (
                <span key={id} className='mr-4 text-xs'>
                  {name}
                </span>
              ))}
              <h5 className='mt-4 text-lg font-semibold'>
                Production Countries
              </h5>
              {production_countries?.map(({ id, name }) => (
                <span key={id} className='mr-4 text-xs'>
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Details;
