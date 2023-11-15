import { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { StarFill } from 'react-bootstrap-icons';

const Details = () => {
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { genre, id } = useParams();

  const {
    backdrop_path,
    budget,
    genres,
    homepage,
    original_title,
    overview,
    poster_path,
    production_companies,
    release_date,
    revenue,
    runtime,
    status,
    tagline,
    title,
    vote_average,
    type,
    original_name,
    name,
    created_by,
    seasons,
    first_air_date,
    last_air_date,
    number_of_seasons,
    number_of_episodes,
  } = details;

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/${genre}/${id}?api_key=${import.meta.env.VITE_API_KEY}`
      );

      const data = await response.json();

      setDetails(data);
      setIsLoading(false);
    };

    fetchDetails();
  }, [genre, id]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <Fragment>
      <div
        className='background'
        style={
          backdrop_path && {
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
          }
        }>
        <div className='container'>
          <div className='flex flex-col md:flex-row gap-12 items-center py-12'>
            <div className='xl:flex-1'>
              <img
                src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : '/images/no-image.png'}
                alt={original_title}
                className='rounded-xl'
              />
            </div>
            <div className='sm:pl-4 md:w-2/3 xl:flex-1'>
              <h2 className='text-4xl font-bold'>{original_title}</h2>
              <h2 className='text-4xl font-bold'>{original_name}</h2>
              <h3 className='mt-1 italic text-sm'>{title}</h3>
              <h3 className='mt-1 italic text-sm'>{name}</h3>
              <span className='flex gap-1 mt-4'>
                <StarFill className='text-lg text-yellow-500' />
                {vote_average.toFixed(1)} / 10
              </span>
              {release_date && <span className='mt-2'>Release Date: {release_date}</span>}
              {tagline && <p className='text-xl italic font-mono mt-4 pt-2'>{tagline}</p>}
              <p className='mt-4 text-sm'>{overview}</p>
              {genres.length > 0 && <h4 className='mt-4 mb-1 text-lg font-semibold'>Genres</h4>}
              {genres &&
                genres.map(({ id, name }) => (
                  <span key={id} className='mr-2 py-1 px-4 rounded-lg text-xs bg-black'>
                    {name}
                  </span>
                ))}
              {created_by && created_by.length > 0 && <h4 className='mt-4 mb-2 text-lg font-semibold'>Created by</h4>}
              <div className='flex gap-4'>
                {created_by &&
                  created_by.map(({ id, name, profile_path }) => (
                    <div key={id} className='flex flex-col items-center gap-1'>
                      <img
                        src={profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : '/images/profile.png'}
                        alt={name}
                        className='w-16 h-16 object-cover rounded-lg'
                      />
                      <span className='text-xs'>{name}</span>
                    </div>
                  ))}
              </div>
              <h4 className='mt-8 text-lg font-semibold'>Stat for nerds</h4>
              {budget ? (
                <p className='mt-1 text-sm'>
                  <span className='text-yellow-500'>Budget:</span> $
                  {budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </p>
              ) : null}
              {revenue ? (
                <p className='text-sm'>
                  <span className='text-yellow-500'>Revenue:</span> $
                  {revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </p>
              ) : null}
              {runtime && (
                <p className='text-sm'>
                  <span className='text-yellow-500'>Runtime:</span> {runtime} minutes
                </p>
              )}
              {number_of_seasons && (
                <p className='text-sm'>
                  <span className='text-yellow-500'>Number of seasons:</span> {number_of_seasons}
                </p>
              )}
              {number_of_episodes && (
                <p className='text-sm'>
                  <span className='text-yellow-500'>Number of episodes:</span> {number_of_episodes}
                </p>
              )}
              {first_air_date && (
                <p className='text-sm'>
                  <span className='text-yellow-500'>First air date:</span> {first_air_date}
                </p>
              )}
              {last_air_date && (
                <p className='text-sm'>
                  <span className='text-yellow-500'>Last air date:</span> {last_air_date}
                </p>
              )}
              {status && (
                <p className='text-sm'>
                  <span className='text-yellow-500'>Status:</span> {status}
                </p>
              )}
              {type && (
                <p className='text-sm'>
                  <span className='text-yellow-500'>Type:</span> {type}
                </p>
              )}
              {production_companies.length > 0 && <h5 className='mt-4 text-lg font-semibold'>Production Companies</h5>}
              {production_companies.map(({ id, name }) => (
                <span key={id} className='mr-4 text-xs'>
                  {name}
                </span>
              ))}
              <a
                href={homepage}
                target='_blank'
                rel='noreferrer'
                className='block w-40 text-sm text-center mt-4 py-2 border rounded-xl'>
                Visit Homepage
              </a>
            </div>
          </div>
          {seasons && <h4 className='mt-8 mb-4 ml-4 text-2xl font-semibold text-yellow-500'>Seasons</h4>}
          <div className='grid gap-8 pb-12 ml-4'>
            {seasons &&
              seasons.map(({ id, air_date, episode_count, name, overview, season_number }) => (
                <div key={id}>
                  {name && <p className='font-bold'>{name}</p>}
                  {season_number && season_number !== 0 ? (
                    <span className='text-xs'>Season Number: #{season_number}</span>
                  ) : null}
                  {episode_count && <p className='text-xs'>Episode Count: {episode_count}</p>}
                  {air_date && <p className='text-xs'>Air date: {air_date}</p>}
                  {overview && <p className='mt-4 text-sm italic'>{overview}</p>}
                </div>
              ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Details;
