import { Search } from 'react-bootstrap-icons';

const SearchForm = () => {
  return (
    <form className='w-full md:max-w-2xl py-12 mx-auto'>
      <div className='flex gap-3 text-sm accent-[#beadfa]'>
        <div className='flex items-center gap-1'>
          <input type='radio' id='movies' name='search-type' defaultChecked />
          <label htmlFor='movies'>Movies</label>
        </div>
        <div className='flex items-center gap-1'>
          <input type='radio' id='tv-shows' name='search-type' />
          <label htmlFor='tv-shows'>Tv Shows</label>
        </div>
      </div>
      <div className='flex items-center h-12 mt-3'>
        <input
          type='text'
          id='search-input'
          placeholder='Enter movie or TV show'
          className='h-full w-full bg-transparent pl-2 border-2 rounded-l-lg text-sm outline-none border-[#beadfa] md:max-w-2xl'
        />
        <button type='submit' className='h-full px-6 rounded-r-lg bg-[#beadfa]'>
          <Search className='text-black' />
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
