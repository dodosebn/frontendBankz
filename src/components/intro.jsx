import React, { useState, useEffect } from 'react';
import intBgMobile from '../images/bg-intro-mobile.svg';
import intBgDesktop from '../images/bg-intro-desktop.svg';
import imgMock from '../images/image-mockups.png';
import Button from './button';

const Intro = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize); 
    }, []);

    return (
        <div className='font-sans  pb-4'>
            <div className='relative'>
                <img src={isMobile ? intBgMobile : intBgDesktop} alt="Background" className='w-full'/>
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
