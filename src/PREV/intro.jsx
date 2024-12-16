import React from 'react';
import intBgMobile from '../images/bg-intro-mobile.svg';
import intBgDesktop from '../images/bg-intro-desktop.svg';
import imgMock from '../images/image-mockups.png';
import Button from './button';

const Intro = ({ menuClicked }) => {
  return (
    <div className="font-sans bg-VeryLightGray pb-4">
      <div className="relative"     style={menuClicked ? { background: 'linear-gradient(to bottom, #9698a5, #fff)' } : {}} >
       {/* bg-for the desktp, once it changes the imgmock padds left to it       */}
       <section className='flex flex-col justify-center lg:relative'>
        <picture className='lg:relative lg:left-[35rem]'>
          <source media="(min-width: 768px)" srcSet={intBgDesktop} />
          <img src={intBgMobile} alt="kjt" className='w-full lg:w-[73rem] lg:h-[30rem] lg:object-cover'/>
        </picture>

        
          <div className={`absolute right-0 left-0 mb-[15rem]  ${menuClicked ? "hidden" : "block"}  lg:bottom-[37em] lg:left-[45rem] lg:relative `}>
            <img src={imgMock} alt="Mockups" className='h-[37rem] w-full lg:w-[40rem] lg:h-[50rem]'/>
          </div>
          </section>
          {/* The message that's to be flexed in the desktp */}
          <section className='flex flex-col justify-center text-center font-sans lg:relative bottom-[76em] right-[16rem]'>
            <h1 className="text-5xl text-DarkBlue opacity-[2rem] font-medium lg:pr-[17rem] lg:items-start">Next generation <br className='hidden lg:block'/> digital banking</h1>
            <article className='pt-5 flex justify-center text-center font-sans text-GrayishBlue text-lg lg:pr-[10rem]'>
            <p className="w-[23rem] lg:w-[26rem] font-medium lg:text-start">
              Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, <br className='hidden lg:block'/>budgeting, investing, and much more.
            </p>
            </article>
            <Button className={'pt-5 lg:mr-[27rem]'} />
        </section> 
      </div>
    </div>
  );
}

export default Intro;
