import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay } from 'swiper/modules';

import { StarFill } from 'react-bootstrap-icons';

import 'swiper/css';

const Slider = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${
          import.meta.env.VITE_API_KEY
        }`
      );

      const data = await response.json();
      setMovies(data.results);
    };

    fetchMovies();
  }, []);

  return (
    <Swiper
      modules={[A11y, Autoplay]}
      slidesPerView={1}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        540: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}>
      {movies.map(({ id, original_title, poster_path, vote_average }) => (
        <SwiperSlide key={id}>
          <Link to={`/details/${id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={original_title}
              className='rounded-t-lg mx-auto w-full'
            />
            <div className='flex gap-1 justify-center font-semibold rounded-b-lg py-3 bg-[#0f0f0f]'>
              <StarFill className='text-xl text-yellow-500' />
              {`${vote_average.toFixed(1)} / 10`}
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
