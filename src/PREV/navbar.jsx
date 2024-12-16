import React from 'react';
import Logo from '../images/logo.svg';
import NavBtn from '../images/icon-hamburger.svg';
import closeNavBtn from '../images/icon-close.svg';
import Button from './button';

const NavBar = ({ className, menuClicked, setMenuClicked }) => {
  return (
    <header className={`${className} z-20 bg-white relative top-0 left-0 w-full shadow-md h-[4.3rem]`}>
      <section className="flex justify-between px-4">
        <div className='lg:pl-10'>
          <img src={Logo} alt="logo" />
        </div>
        <div className="lg:hidden">
          {menuClicked ? (
            <button onClick={() => setMenuClicked(false)}>
              <img src={closeNavBtn} alt="close-nav-btn" />
            </button>
          ) : (
            <button onClick={() => setMenuClicked(true)}>
              <img src={NavBtn} alt="nav-btn" />
            </button>
          )}
        </div>
      </section>

      <nav className={`flex justify-between lg:absolute lg:-top-[1rem] lg:left-[26rem]`}>
        <div className="flex justify-center mt-10 mx-auto">
          <aside
            className={`${
              menuClicked
                ? 'bg-white w-[20rem] flex justify-center items-center h-[20rem] font-sans rounded-lg shadow-lg'
                : 'hidden'
            } lg:flex lg:mb-flex-row`}
          >
            <ul className="text-center font-bold text-slateGray text-lg space-y-4 lg:space-y-0 lg:space-x-9 flex lg:flex-row flex-col">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
            <div className='lg:relative bottom-2 left-[13rem]'>
            <Button className='hidden lg:flex'/>
            </div>
          </aside>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
