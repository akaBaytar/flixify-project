import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='container text-center'>
      <p className='text-6xl mt-4'>4 0 4</p>
      <p className='text-xl my-4 text-gray-500'>Page Not Found</p>
      <Link to='/' className='text-sm text-violet-300'>
        <img src='/images/404.png' alt='404' />
      </Link>
    </div>
  );
};

export default Error;
