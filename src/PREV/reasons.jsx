import React from 'react';
import apiImg from '../images/icon-api.svg';
import simImg from '../images/icon-budgeting.svg';
import onboardingImg from '../images/icon-onboarding.svg';
import onlineImg from '../images/icon-online.svg'
const Reasons = () => {
  return (
    <div className='relative -z-20'>
    <div className='lg:absolute lg:bottom-[49rem] bg-VeryLightGray p-4 text-center lg:text-start pt-[3rem] lg:p-[4rem]'>
      <article>
        <h1 className='text-4xl text-DarkBlue'>Why choose Easybank?</h1>
        <p  className='text-GrayishBlue font-medium text-lg pt-3 lg:w-[40rem]'>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
      </article>
      <section className='flex lg:flex-row flex-col gap-[3rem] lg:gap-4 text-GrayishBlue font-medium text-lg pt-[3rem]'>
        <article>
          <img src={onlineImg} className="mx-auto lg:ml-0" />
          <h1 className='text-DarkBlue text-3xl pt-3'>Online Banking</h1>
          <p className='pt-3 lg:w-[16rem]'>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
        </article>
        <article>
          <img src={simImg} className="mx-auto lg:ml-0"/>
          <h1 className='text-DarkBlue text-3xl pt-3 '>Simple Budgeting</h1>
          <p className='pt-3  lg:w-[16rem]'>See exactly where your money goes each month. Receive notifications when you're close to your hitting limits.</p>
        </article>
        <article>
          <img src={onboardingImg} className="mx-auto lg:ml-0"/>
          <h1 className="text-DarkBlue text-3xl pt-3">Fast Onboarding</h1>
          <p className='pt-3  lg:w-[17rem]'>We don't do branches. Open your account in minutes online and start taking control of your finances right away.</p>
        </article>
        <article>
          <img src={apiImg} className="mx-auto lg:ml-0"/>
          <h1 className='text-DarkBlue text-3xl pt-3'>Open API</h1>
          <p className='pt-3  lg:w-[19rem]'>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier</p>
        </article>
      </section>
    </div>
  </div>
  
  )
}

export default Reasons;
