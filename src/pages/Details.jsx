import { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
  const [details, setDetails] = useState([]);

  const { id } = useParams();

  const {
    adult,
    backdrop_path,
    belongs_to_collection,
    budget,
    genres,
    homepage,
    imdb_id,
    original_language,
    original_title,
    overview,
    popularity,
    poster_path,
    production_companies,
    production_countries,
    release_date,
    revenue,
    runtime,
    spoken_languages,
    status,
    tagline,
    title,
    video,
    vote_average,
    vote_count,
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
      <div className='container'></div>
    </Fragment>
  );
};

export default Details;
