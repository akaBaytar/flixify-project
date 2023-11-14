import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Search } from 'react-bootstrap-icons';

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState('movie');

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    navigate(`/search?query=${searchQuery}&option=${selectedOption}`);
  };

  return (
    <form className='w-full  py-12 mx-auto' onSubmit={onSubmit}>
      <div className='flex gap-3 text-sm accent-[#beadfa]'>
        <div className='flex items-center gap-1'>
          <input
            type='radio'
            id='movie'
            name='search-type'
            value='movie'
            checked={selectedOption === 'movie'}
            onChange={() => setSelectedOption('movie')}
            required
          />
          <label htmlFor='movie'>Movies</label>
        </div>
        <div className='flex items-center gap-1'>
          <input
            type='radio'
            id='tv'
            name='search-type'
            value='tv'
            checked={selectedOption === 'tv'}
            onChange={() => setSelectedOption('tv')}
          />
          <label htmlFor='tv'>Tv Shows</label>
        </div>
      </div>
      <div className='flex items-center h-12 mt-3'>
        <input
          type='text'
          id='search-input'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder='Enter movie or TV show'
          className='h-full w-full bg-transparent pl-2 border-2 rounded-l-lg text-sm outline-none border-[#beadfa] '
        />
        <button type='submit' className='h-full px-6 rounded-r-lg bg-[#beadfa]'>
          <Search className='text-black' />
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
