import { Link } from 'react-router-dom';

import { Github, Linkedin, Instagram, HeartFill } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <footer className='bg-[#0f0f0f]'>
      <div className='container flex items-center justify-between pt-6 pb-2'>
        <h1 className='text-2xl tracking-widest font-semibold'>
          <Link to='/'>Flixify</Link>
        </h1>
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
      </div>
      <div className='container'>
        <p className='text-xs text-end pb-2 text-gray-400'>Copyright © {new Date().getFullYear()} Powered with <HeartFill className='inline-flex'/> by Burak BİLGİLİ</p>
      </div>
    </footer>
  );
};

export default Footer;
