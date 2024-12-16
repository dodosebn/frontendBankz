import React from 'react';
import logo from '../images/logo.svg';
import { footerIcons } from './shared/mappings';
import Button from './shared/button';

const Footer = () => {
  return (
    <footer className="relative">
      <div className="bg-DarkBlue text-LightGrayishBlue w-full px-[5.5rem] pb-[2rem] lg:flex lg:justify-between lg:items-start cursor-pointer">
        <section className="flex flex-col lg:flex-row gap-[5rem] flex-1 relative">
          {/* Logo and Icons */}
          <div className="flex flex-col items-center lg:items-start pt-5">
            <img src={logo} alt="logo" className="mb-4 bg-LightGrayishBlue border-none outline-none p-3" />
            <div className="flex gap-4 pt-6">
              {footerIcons.map((footer) => (
                <div key={footer.id}>
                  <img
                    src={footer.imgSrc}
                    alt="footer icon"
                    className="w-6 h-6 hover:text-LimeGreen hover:filter hover:brightness-125"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col text-center lg:text-left lg:pt-5">
            <ul className="mb-4">
              <li className="mb-3 hover:text-LimeGreen">About us</li>
              <li className="mb-3 hover:text-LimeGreen">Contact</li>
              <li className="hover:text-LimeGreen">Blog</li>
      
          <div className="flex flex-col text-center lg:text-left mt-6 lg:mt-0 lg:pl-[9rem] lg:relative bottom-[5.5rem]">
  
              <li className="mb-3 hover:text-LimeGreen">Careers</li>
              <li className="mb-3 hover:text-LimeGreen">Support</li>
              <li className="hover:text-LimeGreen">Privacy Policy</li>
              </div>
            </ul>
            </div>
        
        </section>

        {/* Right Section */}
        <section className="flex flex-col items-center lg:items-end gap-4 flex-1 pt-7 pb-5">
          <Button />
          <span className="mt-2 text-center lg:text-right hover:text-LimeGreen">
            © Easybank. All Rights Reserved
          </span>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
