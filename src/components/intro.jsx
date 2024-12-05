import React, { useState, useEffect } from 'react';
import intBgMobile from '../images/bg-intro-mobile.svg';
import intBgDesktop from '../images/bg-intro-desktop.svg';
import imgMock from '../images/image-mockups.png';
import Button from './button';

const Intro = () => {
   
    return (
        <div className='font-sans  pb-4'>
            <div className='relative'>
                <picture>
                    <source media='(min-width: 768px)' srcSet={intBgDesktop} className='w-full'/>
                    <img src={intBgMobile} alt="kjt" className='w-full' />
                </picture>
                <div className='absolute z-10 bottom-14'>
  <img src={imgMock} alt="Mockups" />
</div>

            </div>
            <div className='px-8 pb-4 text-center font-sans'>
                <h1 className='text-5xl text-DarkBlue opacity-[2rem] font-medium'>Next generation digital banking</h1>
                <p className='pt-5 text-GrayishBlue text-start text-lg w-[23rem] font-medium'>
                    Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
                </p>
                <Button className={'pt-5'} />
            </div>
        </div>
    );
}

export default Intro;
