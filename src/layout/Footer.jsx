import { Link } from 'react-router-dom';

import { Github, Linkedin, Instagram } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <footer className='bg-[#0f0f0f]'>
      <div className='container flex items-center justify-between py-6'>
        <h1 className='text-2xl tracking-widest font-semibold'>
          <Link to='/'>Flixify</Link>
        </h1>
        <nav>
          <ul className='flex gap-3 text-2xl'>
            <li>
              <a
                href='https://www.linkedin.com/in/akabaytar/ '
                target='_blank'
                rel='noreferrer'
                className='hover:text-[#0077b5] duration-300'>
                <Linkedin />
              </a>
            </li>
            <li>
              <a
                href='https://www.github.com/akabaytar/ '
                target='_blank'
                rel='noreferrer'
                className='hover:text-[#2b3137] duration-300'>
                <Github />
              </a>
            </li>
            <li>
              <a
                href='https://www.instagram.com/akabaytar/ '
                target='_blank'
                rel='noreferrer'
                className='hover:text-[#C13584] duration-300'>
                <Instagram />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
