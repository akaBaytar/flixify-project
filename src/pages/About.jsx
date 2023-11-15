const About = () => {
  return (
    <div className='container mx-auto py-8'>
      <h1 className='text-2xl font-bold mb-6'>About</h1>
      <p className='text-sm mb-6'>
        Welcome to my movie and TV show discovery app! This project was created to provide users with an easy
        way to explore popular movies and TV shows from The Movie Database (TMDb).
      </p>
      <p className='text-sm mb-6'>
        Feel free to navigate through the app, explore different genres and enjoy the world of movies and TV shows.
      </p>
      <p className='text-sm'>Thank you for using my app and happy watching!</p>
      <div className='mb-8 mt-6'>
        <h2 className='text-lg font-bold mb-2 flex items-center'>Features</h2>
        <ul className='list-disc list-inside text-sm'>
          <li>Discover popular movies and TV shows</li>
          <li>Search for your favorite titles</li>
          <li>View detailed information about each movie or TV show</li>
        </ul>
      </div>
      <div className='mb-8'>
        <h2 className='text-lg font-bold mb-2 flex items-center'>Technologies Used</h2>
        <ul className='list-disc list-inside text-sm'>
          <li>
            <strong>React:</strong>A JavaScript library for building user interfaces.
          </li>
          <li>
            <strong>Vite:</strong> A fast frontend build tool.
          </li>
          <li>
            <strong>Tailwind CSS:</strong> A utility-first CSS framework.
          </li>
          <li>
            <strong>MovieDB API:</strong> Provides access to a vast database of movies and TV shows.
          </li>
        </ul>
      </div>
      <div className='mb-8'>
        <h2 className='text-lg font-bold mb-4 flex items-center'>Version</h2>
        <p className='text-sm'>v1.0.0</p>
      </div>
      <div>
        <h2 className='text-lg font-bold mb-6 flex items-center'>Additional Information</h2>
        <p className='text-sm mb-6'>
          This project is powered by The Movie Database (TMDb) API, providing accurate and up-to-date information about
          movies and TV shows.
        </p>
        <p className='text-sm'>
          If you have any feedback or suggestions, i&apos;d love to hear from you! Reach out to us at{' '}
          <a href='mailto:contact@burakbilgili.co.uk' className='text-yellow-500'>
            here
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
