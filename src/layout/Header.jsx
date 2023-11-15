import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='bg-[#0f0f0f] h-20'>
      <div className='container flex items-center justify-between py-6'>
        <h1 className='text-2xl tracking-widest font-semibold'>
          <Link to='/'>Flixify</Link>
        </h1>
        <nav>
          <ul className='flex gap-4 text-xs md:text-sm'>
            <li>
              <NavLink to='/' className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')}>
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink to='/tv' className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')}>
                Tv Shows
              </NavLink>
            </li>
            <li>
              <NavLink to='/about' className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')}>
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
