import React from 'react';
import Logo from '../images/logo.svg';
import NavBtn from '../images/icon-hamburger.svg';

const NavBar = ({ className }) => {
  return (
    <div className={`${className} z-20 bg-white fixed top-0 left-0 w-full shadow-md h-[4.3rem]`}>
      <nav className='flex justify-between px-4  '>
        <div>
          <img src={Logo} alt="logoStuff" />
        </div>
        <div>
          <img src={NavBtn} alt="nav-btn" />
        <aside className='bg-White flex flex-col justify-center'>
          <ul className='pt-8'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </aside>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
