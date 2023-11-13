import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay } from 'swiper/modules';

import useFetch from '../hooks/useFetch';

import { StarFill } from 'react-bootstrap-icons';

import 'swiper/css';

const Slider = () => {
  const { data, isLoading } = useFetch(
    'https://api.themoviedb.org/3/movie/now_playing'
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Swiper
      modules={[A11y, Autoplay]}
      slidesPerView={1}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}>
      {data?.results.map(
        ({ id, original_title, poster_path, vote_average }) => (
          <SwiperSlide key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={original_title}
              className='rounded-t-lg mx-auto'
            />
            <div className='flex gap-1 justify-center font-semibold rounded-b-lg py-3 bg-[#0f0f0f]'>
              <StarFill className='text-xl text-yellow-500' />
              {`${vote_average.toFixed(1)} / 10`}
            </div>
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
};

export default Slider;
