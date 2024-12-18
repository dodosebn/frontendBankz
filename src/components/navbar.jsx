import React from 'react';
import Logo from '../images/logo.svg';
import NavBtn from '../images/icon-hamburger.svg';
import closeNavBtn from '../images/icon-close.svg';
import Button from './shared/button';
import { motion } from 'framer-motion';
const NavBar = ({ className, menuClicked, setMenuClicked }) => {
  const navItems = ['Home', 'About', 'Contact', 'Blog', 'Careers'];

  return (
    <header className={`${className} z-20 bg-white relative top-0 left-0 w-full shadow-md h-[4.3rem]`}>
      <section className="flex justify-between px-4">
        <motion.div initial={{y: -250}} animate={{y:0}} transition={{duration: 0.3, type: 'spring', stiffness: 120}}className="lg:pl-10">
        
          <img src={Logo} alt="Easybank logo" />
      
        </motion.div>
        <div className="lg:hidden">
          <button onClick={() => setMenuClicked(!menuClicked)}>
            <img
              src={menuClicked ? closeNavBtn : NavBtn}
              alt={menuClicked ? "Close navigation menu" : "Open navigation menu"}
            />
          </button>
        </div>
      </section>

      <nav className="flex justify-between lg:absolute lg:-top-[1rem] lg:left-[26rem]">
        <div className="flex justify-center mt-10 mx-auto">
          <aside
            className={` cursor-pointer ${
              menuClicked
                ? 'bg-white w-[20rem] flex justify-center items-center h-[20rem] font-sans rounded-lg shadow-lg'
                : 'hidden'
            } lg:flex lg:mb-flex-row`}
          >
            <ul className="text-center font-bold text-slateGray text-lg space-y-4 lg:space-y-0 lg:space-x-9 flex lg:flex-row flex-col">
              {navItems.map((item) => (
                <motion.li  whileHover={{
                  scale: 1.1,
                  textShadow: '0px 0px 8px #fafafa',}} transition={{type: 'spring', stiffness: 300}} key={item} className='opacity-70 hover:opacity-100   hover:border-LimeGreen hover:border-b-2'>{item}</motion.li>
              ))}
            </ul>
            <div className="lg:relative bottom-2 left-[9rem]">
              <Button className="hidden lg:flex" />
            </div>
          </aside>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
