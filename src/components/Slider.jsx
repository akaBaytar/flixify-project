import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';

import useFetch from '../hooks/useFetch';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
  const { data, isLoading } = useFetch(
    'https://api.themoviedb.org/3/movie/now_playing'
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Swiper
      modules={[Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      breakpoints={{
        500: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        720: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
      pagination={{ clickable: true }}>
      {data?.results.map(({ id, original_title, backdrop_path }) => (
        <SwiperSlide key={id}>
          {original_title}
          <img
            src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
            alt={original_title}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
